import sys

args = sys.argv

if len(args) > 1:
    print(f"{eval(args[1])}")
else:
    print("Error")
