def bottle_song(num):
	count = num
	while count >= 0:
		if count == 0:
			print(f"""No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.""")
			count -= 1
		elif count == 1:
			print(f"""{count} bottle of beer on the wall, {count} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.""")
			count -= 1
		elif count > 1: 
			print(f"""{count} bottles of beer on the wall, {count} bottles of beer.
Take one down and pass it around, {count - 1} bottles of beer on the wall.""")
			count -= 1


bottle_song()
