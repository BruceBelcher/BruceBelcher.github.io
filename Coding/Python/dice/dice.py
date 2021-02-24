print ('Dice Game.  First to 20 WINS, but roll a 1 and you LOOSE')

import random   # returns a randon number betwenn 1 and 6 as dice roll

want_to_play = True
player = 'Player 1'
p1_score = 0
p2_score = 0
rolled = 0
no_winner = True

def roll_dice():
    return (random.randint(1,6))
#END roll_dice

def play(player):
    global p1_score
    global p2_score
    input(player + ' press RETURN') 
    rolled = roll_dice()
    print(player+' rolled a ', rolled)
    if rolled == 1:
        print(player + ' LOOSES')
        return(False)
    if player == 'Player 1':
        p1_score += rolled
        if p1_score > 20:
            print(player + ' WINS')
            return(False)
    if player == 'Player 2':
        p2_score += rolled
        if p2_score > 20:
            print(player + ' WINS')
            return(False)
    
    return(True)    
# END play()

# pick player to start at random
# p = random.randint(1,2)
player = 'Player '+ str(random.randint(1,2))
print(player, ' Starts')

while want_to_play:
    while no_winner:
        print('Player 1 score = ',p1_score,' ',
        'Player 2 score = ', p2_score)
        no_winner = play(player)

        #swap players
        if player == 'Player 1': player = 'Player 2'
        else: player = 'Player 1'
    # END no_winner

    if input('Press X to exit, RET to play: ') == 'X': 
        want_to_play = False 
    
    no_winner = True #reset winner flag
    
#END want_to_play
    

   