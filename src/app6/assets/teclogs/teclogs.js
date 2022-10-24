import { CopyBlock, dracula } from "react-code-blocks";

export const teclogs = [
  {
    link: "/TecLog-1",
    title: "APPRENTICE INDIVIDUAL TECHNICAL LOG DOC, WEEK 4",
    date: "Oct 24, 2022",
    content: (
      <>
        <h2>DOUBLE OR ONE THING (GOOGLE JAM)</h2>
        <p>Oct 24, 2022</p>
        <h3>Problem</h3>
        <p>
          You are given a string of uppercase English letters. You can highlight
          any number of the letters (possibly all or none of them). The
          highlighted letters do not need to be consecutive. Then, a new string
          is produced by processing the letters from left to right:
          non-highlighted letters are appended once to the new string, while
          highlighted letters are appended twice.{" "}
        </p>
        <div className="teclog-img">
          <img
            src=" https://codejam.googleapis.com/dashboard/get_file/AQj_6U3n65VaZyJSsokTKJkYuB5GtQzLD4YKOrgsFJMQQmTEEZQEAHdFmci3XomR_qMXH-T1MwnUnrfOG7E/double_or_one_thing.png"
            alt="google jam example"
          />
        </div>
        <p>
          {" "}
          Given a string, there are multiple strings that can be obtained as a
          result of this process, depending on the highlighting choices. Among
          all of those strings, output the one that appears first in
          alphabetical (also known as lexicographical) order.{" "}
        </p>
        <div className="log-inouts">
          <div className="log-sample-inout">
            <p>Sample Input </p>
            <p>
              {" "}
              3<br />
              PEEL <br />
              AAAAAAAAAA <br />
              CODEJAMDAY <br />{" "}
            </p>
          </div>
          <div className="log-sample-inout">
            {" "}
            <p>Sample output</p>
            <p>
              Case #1: PEEEEL <br />
              Case #2: AAAAAAAAAA <br />
              Case #3: CCODDEEJAAMDAAY <br />{" "}
            </p>
          </div>
        </div>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000877ba5/0000000000aa8e9c"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <p>
          {" "}
          In a more comprehensive manner, we can say that this problem is asking
          us to find the word that would appear first in a dictionary as if we
          were searching it manually. The pool of words is limited to any
          combination of double or single characters depending on which ones you
          decide to highlight. Since we are required the one that has the first
          that would appear in lexicographical order as known as alphabetical
          order, this can’t be a random selection. We will need to compare all
          the combinations possible to sole it, e.g “PEEL” we would have the
          following combinations:{" "}
        </p>
        <p className="teclog-centered">
          {" "}
          PEEEEL, PEEEELL, PEEEL, PEEELL, PEEL, PEELL, PPEEEEL, PPEEEELL,
          PPEEEL, PPEEELL, PPEEL, and PPEELL.{" "}
        </p>
        <p> Where the first to appear in alphabetical order is PEEEEL. </p>
        <h3>Before the solution.</h3>
        <p>
          {" "}
          Having already a grasp of what we need to do, there are several ways
          or paths I thought we could try to solve this problem.{" "}
        </p>
        <p>
          {" "}
          The first one was to use a double four loop to store all the possible
          combinations in a set, which thanks to its properties, would allow us
          to store the combinations without repetition, so then we can compare
          them one by one. The problem with this approach is that our double
          four loop would result in a Big O O(n^2) time complexity solution, and
          the selection of characters can be any, so this ordered for loop would
          miss any other combination of characters that are not ordered.{" "}
        </p>
        <p>
          {" "}
          So, the next solution would be using a Backtracking algorithm, which
          is a technique that considers searching every possible combination,
          but again, this would result in a O(n^2) time complexity solution.{" "}
        </p>
        <h3>Solution (Python)</h3>
        <CopyBlock
          text={`# Input
def main():
    cases = int(input())
    #Array of results for later printing
    resArray = []
    for i in range(cases):
        # We execute the function N times and add the result to array
        resArray.append(minLexOrd(input()))
    
    for i in range(len(resArray)):
        # Printing array
        print(f"Case #{i + 1}: {resArray[i]}")
        
# Double or One Thing function declaration
def minLexOrd(str):
    res = '' # Variable to store the result
    for i in range(len(str)):
        letter = str[-i - 1] # We loop backwards through each char.
 
        """ We compare wether adding 1 or 2 characters to the word
        would result in a lower alphabetical order
        e.g PEEL, "LL" > "L", if true res = "L" else "LL"?
        then, "EEL" > "EL" ? ... and so on
        """
        if letter + letter + res > letter + res: 
            res = letter + res
        else:
            res = letter + letter + res
        
    return res
 
 
if __name__ == '__main__':
    main()
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Explanation</h3>

        <p>
          {" "}
          After trying the other solutions, I remembered that most programming
          languages have already built-in string comparison for alphabetical
          order. Knowing this and having the analogy stated before of building a
          “Dictionary search”, my approach was to actually replicate how most
          people search for words in a dictionary. Most of the times when you
          grab a dictionary, what you do first is searching for the page where
          the first letter of your word is, and after that you start looking at
          the end character of each word to search for similar words. Here we
          only need to complete the last step, which is comparing the last
          letter since it is the one that will decide the alphabetical order.{" "}
        </p>
        <p>
          {" "}
          For example, it does not matter how many a’s you have in a word, the
          one that will pop up first will be the one that has the lower
          lexicographical order:{" "}
        </p>

        <p className="teclog-centered">aaaaaaaaaaa &gt; aaaaaaaaaab </p>

        <p>
          {" "}
          In our program, we apply this same logic. We start with an empty
          string that will enter a for loop to start summing letter by letter.
          Starting from the end, it will compare whether adding two characters
          or only one will have a lesser alphabetical order with the built-in
          comparator operator “&gt;” higher than.
        </p>

        <h3>Conclusion</h3>
        <p>
          {" "}
          There is always another way to solve every problem, in this case I
          provided 2 different solutions, one of them being more time consuming
          than the other (backtrack) but the approach that I always use is doing
          analogies. Understanding how the problem would work in real life
          always gives me a broader view, although I must add, it doesn’t work
          in every situation.{" "}
        </p>
      </>
    ),
  },
  {
    link: "/TecLog-2",
    title: "APPRENTICE GROUP TECHNICAL LOG DOC, WEEK 4",
    date: "Oct 24, 2022",
    content: (
      <>
        <h2>PUNCHED CARDS</h2>
        <p>Oct 24, 2022</p>

        <h3>Problem</h3>
        <p>
          {" "}
          A secret team of programmers is plotting to disrupt the programming
          language landscape and bring punched cards back by introducing a new
          language called Punched Card Python that lets people code in Python
          using punched cards! Like good disrupters, they are going to launch a
          viral campaign to promote their new language before even having the
          design for a prototype. For the campaign, they want to draw punched
          cards of different sizes in ASCII art.{" "}
        </p>
        <div className="teclog-img">
          <img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1czYfn54qiD2aqETqCx884cVUzIDuxEgv_7KFfDN5b8VWc1JFa-nVRTY2r_KjyYVaL1w/punched_card.png " />
        </div>
        <p>
          {" "}
          The ASCII art of a punched card they want to draw is similar to an R×C
          matrix without the top-left cell. That means, it has [(R⋅C) − 1] cells
          in total. Each cell is drawn in ASCII art as a period (.) surrounded
          by dashes (-) above and below, pipes (|) to the left and right, and
          plus signs (+) for each corner. Adjacent cells share the common
          characters in the border. Periods (.) are used to align the cells in
          the top row.
        </p>
        <p>
          For example, the following is a punched card with R=3 rows and C=4
          columns
        </p>
        <p className="punched-cards">
          ..+-+-+-+
          <br />
          ..| . | . | . |
          <br />
          +-+-+-+-+
          <br />
          ..| . | . | . |
          <br />
          +-+-+-+-+
          <br />
          ..| . | . | . |
          <br />
          +-+-+-+-+
          <br />
        </p>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a4621b"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          Punched Cards is a problem that deals with array manipulation, where
          given the integers R = Rows and C = Columns describing the size of a
          punched card, you need to print the ASCII art drawing of it as
          described. So, the solution was brute forced with for loops
        </p>
        <h3> Solution (Python)</h3>
        <CopyBlock
          text={`# Function to print the card, takes two arguments rows and colunms
          def printPunchCard(row, col):
              # Top left print
              print("..", end='')
              for i in range(col - 1): # O(n)
                  print("+-", end='')
              print("+", end='\\n')
              print("..", end='')
              for i in range(col - 1): # O(n)
                  print("|.", end='')
              print("|", end='\\n')
              # End of top left print
          
              # Constructing the string to print multiple times
              plus = ""
              bars = ""
          
              # Plus sign string
              for i in range(col): # O(n)
                  plus += "+-"
              plus += "+"
          
              # Bar sign string
              for i in range(col): # O(n)
                  bars += "|."
              bars += "|"
          
              # Printing rest of the punch card
              for i in range(row): # O(n)
                  print(plus, end='\\n')
                  if (i == row - 1):
                      continue
                  else:
                      print(bars, end='\\n')
          
          
          # Input 
          cases = int(input())
          casesArray = []

          for i in range(cases): # O(n)
              x, y = input().split()
              casesArray.append([int(x), int(y)])
          
          for i in range(cases): # O(n)
              print(f"Case #{i+1}:")
              printPunchCard(casesArray[i][0], casesArray[i][1])          
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution / Explanation</h3>
        <p>
          My contribution to this problem was the solution in python. Basically,
          what we do is a template for the top left corner which always will be
          a row with the same pattern every time. Then, as we can sum strings in
          python, we can build the other 2 patterns required to print the rest
          of the card. We do this by declaring an empty string called “plus” and
          adding C times (for cols) to it the characters “+-” through a for
          loop. Then we repeat the same process for another string called “bars”
          but this time using the characters “|.”.{" "}
        </p>
        <p>
          Once we have constructed these 2 strings, we only need print each line
          R times interleaving one and another to build our full pattern.{" "}
        </p>

        <h3>Conclusion</h3>
        <p>
          The code can be considered a brute force solution since we only focus
          on building patterns through the use of array manipulation. Sometimes
          the most naïve solution could be the one that can get us to our goal
          more easily.
        </p>
        <h2>3D PRINTING</h2>
        <h3>Problem</h3>
        <p>
          You are part of the executive committee of the Database Design Day
          festivities. You are in charge of promotions and want to print three
          D's to create a logo of the contest. You can choose any color you want
          to print them, but all three have to be printed in the same color.
        </p>
        <div className="teclog-img">
          <img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1cdSOY7WiKnEIm4EtiJyBgZdflL0gjG2oEiBAUuAtPBJtBjuu9BJSLJBrFb4K43rU9/3d_printing.png" />
        </div>
        <p>
          The total amount of ink needed to print a single D is exactly
          1,000,000units. For example, printing a D in pure yellow would use
          1,000,000 units of yellow ink and 0 from all others. Printing a D in
          the Code Jam red uses 0 units of cyan ink, 500,000 units of magenta
          ink, 450,000 units of yellow ink, and 50,000 units of black ink.
        </p>
        <p>
          To print a color, a printer must have at least the required amount of
          ink for each of its 4 color cartridges.
        </p>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a4672b"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          For this problem, we supposedly have 3 printers, each with 4 ink
          cartridges: cyan(c), magenta(m), yellow(y) and black(k). We must print
          a letter ‘D’ using any combination of ink summing exactly 1,000,00
          units, so at first glance we can see that the requirements are not
          harsh and there are no exact solutions since we only need to sum
          1,000,000 units. We can try and sum the ink from each printer and
          discard the case if one printer doesn’t meet the unit’s requirement.
          In case we have the ink on each printer, we already know the printing
          is possible since we don’t have a specific formula to print. We only
          need to find the lowest values of each kind of ink which will be our
          limits for each printer when we make the sum to meet the 1 million
          units' requirement.{" "}
        </p>
        <h3> Solution (Python)</h3>
        <CopyBlock
          text={`# Function to calculate the minimum ink possible, takes 1 argument
          # 1 multidimensional array [[inks],[inks],[inks]] ... etc which will be the ink
          # on each tree printers
          def calculateInk(arr):
              TOTAL = 1000000
              # renamed the array, each arr[] is one printer 
              printers = [arr[0], arr[1], arr[2]]
              c = m = y = k = 0
              # For loop to know if it will be possible to print
              # Double loop which will result on O(n^2) complexity, but we know how
              # many times it will loop (4*3), so O(n)
              for i in range(3):
                  curr = sum(printers[i])
                  if curr < TOTAL:
                      return "IMPOSSIBLE"
          
              # Checking minimum values for each printer to sum up to 1million units
              # We construct an array with mentioned values
              minInk = printers[0]
              for i in range(4):
                  for j in range(3):
                      if minInk[i] > printers[j][i]:
                          minInk[i] = printers[j][i]
          
              # Double check to confirm the 1m units
              curr = sum(minInk)
              if curr < 1000000:
                  return "IMPOSSIBLE"
              else:
                  ink = 0
                  currPrint = [0, 0, 0, 0]
                  
                  # We have minimum values already, but we need to sum 1m units
                  # This function will reduce the array to sum 1m
                  for i in range(4):
                      if (ink + minInk[i]) >= 1000000:
                          currPrint[i] = minInk[i] - abs(minInk[i] + ink - 1000000)
                          break
                      else:
                          ink += minInk[i]
                          currPrint[i] = minInk[i]
              return currPrint
          
          # Input routine
          
          cases = int(input())
          results = [] * cases
          
          # For Loop to calculate each case
          # The results will be stored in "results" for further printing
          for i in range(cases): # O(n^2), max inputs = 100 * 3, so O(n)
              caseArray = [[], [], []]
              for j in range(3):
                  c, m, y, k = input().split()
                  caseArray[j] = ([int(c), int(m), int(y), int(k)])
              results.append(calculateInk(caseArray))
          
          # For loop for printing the resultss
          for i in range(cases): # O(n)
              if len(results[i]) != 4:
                  print(f"Case #{i+1}: {results[i]}")
              else:
                  print(f"Case #{i+1}:", end=" ")
                  for j in range(4):
                      print(results[i][j], end=" ")
                  print("")
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution / Explanation</h3>
        <p>
          My contribution to this problem was the solution in python. First, we
          start with a 3 items array which represents the printers. These 3
          items have values in them that represent each ink, 4 values in total
          for each color. This means we have a 3x4 multidimensional array. These
          4 values of each printer will be summed up through a for loop to see
          if the solution is possible and save a little bit of time if it is
          not. Once we confirmed that it is possible, we need to find the
          minimum values of ink in each printer to get a minimum values array.
        </p>
        <p>
          Once we calculated our minimum values array, we can use this as a
          limiter to obtain the array needed for each printer to print the D.
          Since we are not required a specific combination of values of inks, we
          simply use a for loop to sum 1 million units and reduce the rest of
          the values within that minimum values array.
        </p>

        <h3>Conclusion</h3>
        <p>
          This problem can be considered as a naïve solution. The requirements
          are not hard to meet since we don’t have specific values to meet on
          each color of ink, so we can force any solution that can add up to 1
          million units. The only thing we have to check is that we actually can
          sum 1 million units on each printer.
        </p>
        <h2>d1000000</h2>
        <h3>Problem</h3>
        <p>
          While the most typical type of dice has 6 sides, each of which shows a
          different integer 1 through 6, there are many games that use other
          types. In particular, a dk is a die with k sides, each of which shows
          a different integer 1 through k. A d6 is a typical die, a d4 has four
          sides, and a d1000000 has one million sides.
        </p>
        <div className="teclog-img">
          <img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1qY5tfNCjf8YoCMu6HlnbBl9frVt7iWV6MzsRqgwA1EitmQlG2zgBhSvGwhaDa/D1000000.png" />
        </div>
        <p>
          In this problem, we start with a collection of N dice. The i-th die is
          a dSi, that is, it has Si sides showing integers 1 through Si. A
          straight of length ℓ starting at x is the list of integers
          x,x+1,…,x+(ℓ−1). We want to choose some of the dice (possibly all) and
          pick one number from each to form a straight. What is the longest
          straight we can form in this way?{" "}
        </p>
        <p>
          As parameters, you will be given T as number of cases, on the second
          line will be the list of N dice and on the following line will be list
          of the respective sides of the dice.{" "}
        </p>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a46471"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          For this problem, we will need to assume that the dices won’t have the
          typical 6 sides, and instead, consider the numbers of sides that will
          be given as an input. However, the dice will keep the property of
          being numbered from 1 to k. There is no restriction on which order the
          dice will be thrown, so we can already visualize that the solution is
          focused on an ascending sort to obtain the highest output possible.{" "}
        </p>
        <h3> Solution (Python)</h3>
        <CopyBlock
          text={`# Function to calculate max straight number
          def calculateStraight():
              dices = int(input())
              # Array of dices
              diceSides = list(map(int, input().split()))
              # We sort the array for convinience O(n)
              diceSides.sort()
              # We only need two parameters to know if we can keep a straight
              minSides = diceSides[0]
              maxStraight = 0
          
              # For loop to calculate maxStraight
              for i in range(dices):
                  # O(n) Function
                  if (diceSides[i] >= minSides) and (diceSides[i] > maxStraight):
                      maxStraight += 1
                  else:
                      continue
          
              # Our function returns an int
              return maxStraight
          
          
          # Input routine
          cases = int(input())
          
          # Array to store results for further printing
          results = []
          # O(n^2) but since we know #cases then our function is O(nLogn) time
          for i in range(cases):
              results.append(calculateStraight())
          # Printing Routine
          for i in range(cases):
              print(f"Case #{i + 1}: {results[i]}")
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution / Explanation</h3>
        <p>
          {" "}
          My contribution to this problem was the solution in python. I noticed
          that the only important part of this problem is to sort the array that
          holds the number of sides of every die since we can keep scoring a
          straight if our next die has more faces than our actual one, or our
          dice can score a number lower than our current maximum straight as we
          can see in our only if statement. So, a for loop is implemented to
          keep visiting all the dices one by one, if the two conditions
          mentioned above are met, we can keep adding a unit to our maximum
          straight.{" "}
        </p>

        <h3>Conclusion</h3>
        <p>
          This challenge was really straightforward, more than a programming
          problem, I consider this as an arithmetic problem. Sometimes the
          difficulty of the problem is based on the technicality of its
          description, so if you really understand the keywords within the text,
          it becomes easier to solve.
        </p>
        <h2>CHAIN REACTIONS</h2>
        <h2>TWISTY LITTLE PASSAGES</h2>
        <h3>Problem</h3>
        <p>
          {" "}
          You are investigating a cave, which is a simple undirected graph with
          N vertices and no isolated vertices. At the start you are told that
          the cave has N &gt;= 10^5 rooms. The vertex number you are at and the
          number of incident edges.{" "}
        </p>
        <p>
          {" "}
          When in a room, you can identify what room you are in and see how many
          passages it connects to, but you cannot distinguish the passages. You
          want to estimate the number of passages that exist in the cave. You
          are allowed to do up to K = 8000 operations. An operation is either:{" "}
        </p>
        <ul>
          <li>
            Teleport: You choose to teleport to a vertex number of your choice
          </li>
          <li>
            Walk: You choose to be moved to a uniformly chosen random neighbor
            of the current vertex.{" "}
          </li>
        </ul>
        <p>
          {" "}
          After each move, you are told the vertex number and the number of
          incident edges. With this information you have to estimate the number
          of edges in the graph in an approximation error of 33.3%, and you are
          to succeed in at least 90% of the test cases.{" "}
        </p>
        <p>Full description of the problem in the following link:</p>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a45fc0"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Description
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          {" "}
          The first approach was to just teleport and visit 8000 random chosen
          vertices, using all of them to estimate the average degree of all the
          vertices, this kind of works, but if the graph is in a star shape
          where all of the passages connect to a center, there is a high chance
          you don’t hit the center by teleporting, causing the sample to average
          every degree to 1.{" "}
        </p>
        <p>
          {" "}
          The way we used to fix this is to teleport once, then walk once, so in
          case of a star your chances of hitting the center is 100%, and not
          just a tiny fraction.{" "}
        </p>
        <p>
          {" "}
          This is a challenge that deals with probability and importance
          sampling. You are given the total rooms and the number of operations
          that you can do for every case. You need to implement a way of asking
          the user every move you want to do by teleporting and walking a total
          of K times, getting all the degrees possible and also a good
          estimation of a degree average, this in case there is still rooms left
          to visit by K operations.{" "}
        </p>
        <h3> Solution (Python)</h3>
        <CopyBlock
          text={`def main():
          cases = int(input())
      
          for case in range(cases):
              solve()
      
      def solve():
          # N: number of rooms, K: number of tries to solve case
          N, K = list(map(int, input().split()))
          # R: current room, P: number of passages seen from room
          R, P = list(map(int, input().split()))
          
          # set {1, 2, ..., N + 1}
          rooms_left = set(range(1, N + 1))
      
          # removes room R from the set
          if R in rooms_left:
              rooms_left.remove(R)
      
          # degree of room
          degree = P
      
          # degree and count of every teleported room
          degree_vt = degree
          count_vt = 1
      
      
          for i in range(K):
              # if there's no room left break
              if not rooms_left:
                  break
      
              # in even cases
              if i % 2 == 0:
                  print(f'W')
                  R, P = list(map(int, input().split()))
      
              # in odd cases
              else:
                  print(f'T {next(iter(rooms_left))}')
                  R, P = list(map(int, input().split()))
      
                  degree_vt += P
                  count_vt += 1
      
              if R in rooms_left:
                  rooms_left.remove(R)
                  degree += P
          
          # degrees average of every visited room
          degree_avg = degree_vt / count_vt
      
          # sum of degree of rooms visited and average degree times
          # number of rooms left
          result = int((degree + degree_avg * len(rooms_left)) / 2)
          print(f'E {result}')
      
      if __name__ == "__main__":
          main()
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution / Explanation</h3>
        <p>
          {" "}
          This problem was the second most difficult one, as a team, we couldn’t
          solve it all by ourselves. Statistics and probability analysis are
          required to solve this problem.{" "}
        </p>
        <p>
          {" "}
          The solution we came up with was not a random pick on whether the user
          should walk or teleport, this decision is based on the index of our
          current movement (No. Of movement). If it’s odd we teleport, if it’s
          even we walk.{" "}
        </p>
        <p>
          In our solution we also implemented the following graph formula for
          edges (passages in problem):{" "}
        </p>
        <p>Edges (Passages) = ΣDegrees/2 </p>
        <p>
          For this type of problems there is no pure scientific correct way of
          solving, here you need to implement enough heuristics so that you are
          fairly certain that you are close to a good estimate.{" "}
        </p>
        <p>
          In this challenge, my contribution was only in optimization. An array
          was being used to store all the passages that were already seen. Since
          we didn’t need the order (index) of every passage and we needed to
          keep removing some rooms, we could store this in a set. This data
          structure’s methods (removing and adding) are O(1) time complexity so
          it would save a considering amount of time in execution. In addition,
          a set would not store already visited rooms and this would save us a
          little extra memory.{" "}
        </p>

        <h3>Conclusion</h3>
        <p>
          These kinds of problems are more focused on statistics and probability
          and graph theory rather than actual programming, although these topics
          are used in real life situations. I really struggled when I tried to
          solve this one, but got the hang of it after a teammate explained it
          to me. I would have never been able to solve this problem if I didn’t
          see the equations that must be considered to solve it.{" "}
        </p>
        <p>
          Further study on this topics is required to fully understand this
          challenge
        </p>
        <h2>DOUBLE OR ONE THING (GOOGLE JAM)</h2>
        <h3>Problem</h3>
        <p>
          You are given a string of uppercase English letters. You can highlight
          any number of the letters (possibly all or none of them). The
          highlighted letters do not need to be consecutive. Then, a new string
          is produced by processing the letters from left to right:
          non-highlighted letters are appended once to the new string, while
          highlighted letters are appended twice.{" "}
        </p>
        <div className="teclog-img">
          <img
            src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U3n65VaZyJSsokTKJkYuB5GtQzLD4YKOrgsFJMQQmTEEZQEAHdFmci3XomR_qMXH-T1MwnUnrfOG7E/double_or_one_thing.png"
            alt="google jam example"
          />
        </div>
        <p>
          {" "}
          Given a string, there are multiple strings that can be obtained as a
          result of this process, depending on the highlighting choices. Among
          all of those strings, output the one that appears first in
          alphabetical (also known as lexicographical) order.{" "}
        </p>
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000877ba5/0000000000aa8e9c"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          {" "}
          In a more comprehensive manner, we can say that this problem is asking
          us to find the word that would appear first in a dictionary as if we
          were searching it manually. The pool of words is limited to any
          combination of double or single characters depending on which ones you
          decide to highlight. Since we are required the one that has the first
          that would appear in lexicographical order as known as alphabetical
          order, this can’t be a random selection. We will need to compare all
          the combinations possible to sole it, e.g “PEEL” we would have the
          following combinations:{" "}
        </p>
        <p>
          {" "}
          PEEEEL, PEEEELL, PEEEL, PEEELL, PEEL, PEELL, PPEEEEL, PPEEEELL,
          PPEEEL, PPEEELL, PPEEL, and PPEELL.{" "}
        </p>
        <p> Where the first to appear in alphabetical order is PEEEEL. </p>
        <h3>Solution (Dart)</h3>
        <CopyBlock
          text={`import 'dart:io'; // Input import

          void main() {
            int cases = int.parse(stdin.readLineSync()); // No. of Cases variable
            
            // For loop to execute the function and printing the result
            for (int i = 1; i < cases + 1; i++){
              String curr = doubleOrOneThing(stdin.readLineSync());
              print("Case #$i: $curr");
            }
          }
          
          doubleOrOneThing(str) {
            String res = ''; // Variable where the result will be stored
              
              for (int i = 0; i < str.length; i++){
                  
                  String letter = str[(str.length - 1) - i]; /* We start iterating from the end
                  otherwise we would need an algorithm to go through all possible solutions*/
                  
                  String comp1 = letter + letter + res; 
                  String comp2 = letter + res;
                  /* comp1, comp2 variables will let us compare which word would have
                  a higher lexicographical order using a string comparison method built
                  in most programming languages */
          
                  // Example: word= PEEL, then, "LL" > "L" ? Make res "LL" : Make res "L"
                  // Returns "L", then, "EEL" > "EL" ? Make res "EEL" : Make res "EL"
                  if (comp1.compareTo(comp2) == 1) {
                      res = letter + res;
                  }
                  else{
                      res = letter + letter + res;
                  }
              }
               // Return final word as a String   
              return res;
          }
    `}
          language={"dart"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution / Explanation</h3>
        <p>
          {" "}
          I volunteered to try this challenge in Dart. Most programming
          languages have already built-in string comparison for alphabetical
          order. Knowing this and having the analogy of stated before of
          building a “Dictionary search”, my approach was to actually search how
          most people search for words in a dictionary. Most of the times when
          you grab a dictionary, what you do first is searching for the page
          where the first letter of your word is, and after that you start
          looking at the end character of each word to search for similar words.
          Here we only need to complete the last step, which is comparing the
          last letter since it is the one that will decide the alphabetical
          order.{" "}
        </p>
        <p>
          {" "}
          For example, it does not matter how many a’s you have in a word, the
          one that will pop up first will be the one that has the lower
          lexicographical order:{" "}
        </p>

        <p>aaaaaaaaaaa &lt; aaaaaaaaaab </p>

        <p>
          {" "}
          In our program, we apply this same logic. We start with an empty
          string that will enter a for loop to start summing letter by letter.
          Starting from the end, it will compare whether adding two characters
          or only one will have a lesser alphabetical order with the built-in
          comparator operator “ &gt;” higher than.
        </p>

        <h3>Conclusion</h3>
        <p>
          {" "}
          There is always another way to solve every problem, in this case I
          could see 2 different solutions, one of them being more time consuming
          than other (backtrack algorithm) but the approach that I always use is
          doing analogies. Understanding how the problem would work in real life
          always gives me a broader view, although I must add, it doesn’t work
          in every situation.{" "}
        </p>
      </>
    ),
  },
];
