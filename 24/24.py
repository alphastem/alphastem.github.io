import sys
import random


def reduce(numbers, exps):

	firstNumber = []
	firstNumberExp = []

	# if numbers[0] > numbers[1]:
	# 	# exchange the order of the first two
	# 	num = numbers[0]
	# 	numbers[0] = numbers[1]
	# 	numbers[1] = num
	# 	exp = exps[0]
	# 	exps[0] = exps[1]
	# 	exps[1] = exp	

	# + 
	firstNumber.append(numbers[0]+numbers[1])
	firstNumberExp.append("("+exps[0]+"+"+exps[1]+")")
	
	# -
	if numbers[0]-numbers[1] >= 0 :
		firstNumber.append(numbers[0]-numbers[1])
		firstNumberExp.append("("+exps[0]+"-"+exps[1]+")")
	else :	
		firstNumber.append(numbers[1]-numbers[0])
		firstNumberExp.append("("+exps[1]+"-"+exps[0]+")")
	
	# * 
	firstNumber.append(numbers[0]*numbers[1])
	firstNumberExp.append("("+exps[0]+"*"+exps[1]+")")
	
	# /
	if numbers[0] != 0:
		firstNumber.append(numbers[1]/numbers[0])
		firstNumberExp.append("("+exps[1]+"/"+exps[0]+")")
		
	if numbers[1] != 0:
		firstNumber.append(numbers[0]/numbers[1])
		firstNumberExp.append("("+exps[0]+"/"+exps[1]+")")
	

	newList = []
	for i in range(len(firstNumber)): 
		list = []
		list.append(firstNumber[i])
		list.extend(numbers[2:])
		exp = []
		exp.append(firstNumberExp[i])
		exp.extend(exps[2:])
		newList.append({"l":list, "e":exp})


	return newList


def reduceAll(list):

	newList = []
	for element in list: 
		numbers = element["l"]
		exps = element["e"]
		s = len(numbers)
		for i in range(s):
			for j in range(s):
				if i != j:
					list4=[]
					list4Exp = []
					list4.append(numbers[i])
					list4Exp.append(exps[i])
					list4.append(numbers[j])
					list4Exp.append(exps[j])
					for k in range(s):
						if k != i and k != j:
							list4.append(numbers[k])
							list4Exp.append(exps[k])
					obj = reduce(list4,list4Exp)
					# print(obj)
					newList.extend(obj)
					

	# remove redundency
	hash = set()
	ret = []
	for obj in newList:
		exp = obj["e"]
		key = str(sorted(exp))
		#print("key:"+key)
		if  key not in hash:
			ret.append(obj)
			hash.add(key)

	return ret

def solve(nums):
	print("Solving:"+str(nums))
	size = len(nums)
	exps = []
	for i in range(size):
		exps.append(str(nums[i]))
	# exps = [str(nums[0]), str(nums[1]), str(nums[2]), str(nums[3])]
	list = [{"l":nums, "e":exps}]
	for i in range(size-1):
		list = reduceAll(list)
		# print(list)
	count = 0
	for obj in list: 
		if obj["l"][0] == 24: 
			print(obj["e"][0])
			count = count + 1	
	print("# of solutions: "+str(count))
	return count > 0



def solveAll():
	solvable = 0
	unsolvable = 0
	for i in range(1,11):
		for j in range(i,11):
			for k in range(j,11):
				for l in range(k,11):
					numbers = [i,j,k,l]
					#exp = [str(i), str(j), str(k), str(l)]
					if solve(numbers):
						solvable += 1
					else: 
						unsolvable +=1

	print("Total solvable: "+str(solvable))
	print("Total unsolvable: "+str(unsolvable))
	print("Solvable rate: "+ str(solvable/(solvable+unsolvable)))



size = len(sys.argv) - 1

if size > 1 : 
# input numbers
	numbers = []
	for i in range(1,size+1):
		 numbers.append(int(sys.argv[i]))
	solve(numbers)	
elif size == 1:
	choices = [1,2,3,4,5,6,7,8,9,10]
	numbers = [random.choice(choices),random.choice(choices),random.choice(choices),random.choice(choices)]
	print(numbers)
	input("Enter to see the solutions:")
	solve(numbers)

else:

	solveAll()


