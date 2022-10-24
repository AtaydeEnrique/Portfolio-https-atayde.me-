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
        <div className="teclog2-menu">
          <ul>
            <li>
              <a href="#teclog2-1">1</a>
            </li>
            <li>
              <a href="#teclog2-2">2</a>
            </li>
            <li>
              <a href="#teclog2-3">3</a>
            </li>
            <li>
              <a href="#teclog2-4">4</a>
            </li>
            <li>
              <a href="#teclog2-5">5</a>
            </li>
            <li>
              <a href="#teclog2-6">6</a>
            </li>
            <li>
              <a href="#teclog2-7">7</a>
            </li>
            <li>
              <a href="#teclog2-8">8</a>
            </li>
          </ul>
        </div>
        <div className="teclog2-menu">
          <p>Challenges</p>
        </div>
        <h2 id="teclog2-1">PUNCHED CARDS</h2>
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
        <h2 id="teclog2-2">3D PRINTING</h2>
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
        <h2 id="teclog2-3">d1000000</h2>
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
        <h2 id="teclog2-4">CHAIN REACTIONS</h2>
        <h3>Problem</h3>
        <p>
          Chain Reactions is a maximization challenge in which we are asked to
          "activate" N modules in a given order. Each module has a fun factor F
          that lies between 1 and 10**9 and each module may point at one other
          module with a lower index. If not, it points at the abyss "0". The fun
          obtained from a chain reaction is the largest fun factor of all
          modules that triggered in that chain reaction. We are going to trigger
          each initiator module once, in some order. The overall fun from the
          session is the sum of the fun we get from each chain reaction. Given
          the fun factors and the setup of the modules, compute the maximum fun
          we can get if we trigger the initiators in the best possible order.{" "}
        </p>
        <p>
          All modules have to be activated, once a module is activated, it
          cannot be triggered again, module cannot point to another with a
          bigger index.
        </p>
        <div class="teclog-img">
          <img
            src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U082gwrOWxTIk0xb0txUp0BUKaS_Eq-ajDPKkxFmikoP0Mj0FSs7KrB_0xXsCCs5A/example_1.gif"
            alt="chain reactions 1"
          />
        </div>
        <br />
        <br />
        <div class="teclog-img">
          <img
            src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1l2CkoolsqG_Rbe9sg49oRAp4iWH_XpyxM8UUBooUbKHsKPfsxbZ869C9oBMO4Aw/example_2.gif"
            alt="chain reactions 2"
          />
        </div>
        <br />
        <br />
        <a
          className="teclog-group-link"
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a45ef7"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam Full Explanation
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          This problem was the most difficult one among the Qualification Round
          2022 - Code Jam 2022. Just by inspection this problem can be solved in
          at least three different ways, although the difficulty of solution
          will increase depending on which path, we take.{" "}
        </p>
        <h4>Depth First Search – Binary Tree/Graph</h4>
        <p>
          Depth-first search (DFS) is a method for exploring a tree or graph. In
          a DFS, you go as deep as possible down one path before backing up and
          trying a different one.{" "}
        </p>
        <p>
          Depth-first search is like walking through a corn maze. You explore
          one path, hit a dead end, and go back and try a different one.{" "}
        </p>
        <p>
          {" "}
          Here's a how a DFS would traverse this tree, starting with the root:{" "}
        </p>
        <div class="teclog-img">
          <img src="https://www.interviewcake.com/images/svgs/depth_first_search_root.svg?bust=210" />
        </div>
        <p>We'd go down the first path we find until we hit a dead end:</p>
        <div class="teclog-img">
          <img src="https://www.interviewcake.com/images/svgs/depth_first_search_dead_end_one.svg?bust=210" />
        </div>
        <p> And so on. </p>
        <p>
          {" "}
          Source -{" "}
          <a
            href="https://www.interviewcake.com/concept/java/dfs"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Depth First Search
          </a>{" "}
        </p>
        <h4>Divide and conquer. </h4>
        <p>
          Divide and conquer is a programming technique that involves dividing a
          complex task into smaller, more manageable tasks. The goal is to break
          complex tasks into smaller, more manageable tasks that can be
          completed in parallel.{" "}
        </p>
        <div class="teclog-img">
          <img
            src="https://www.interviewbit.com/blog/wp-content/uploads/2022/06/What-is-Divide-and-Conquer-1536x1198.png"
            alt="divide and conquer"
          />
        </div>
        <p>
          {" "}
          Source -{" "}
          <a
            href="https://www.interviewbit.com/blog/difference-between-divide-and-conquer-and-dynamic-programming/"
            target="_blank"
            rel="noreferrer"
          >
            Divide and Conquer
          </a>{" "}
        </p>
        <h4>Dynamic programming</h4>
        <p>
          {" "}
          Dynamic programming is a programming paradigm that aims to optimize a
          problem by considering the trade-offs between different approaches.
          The idea is to take a problem and break it down into smaller,
          easier-to-manage subproblems. Then, you can optimize each subproblem
          by considering the best possible solution for each subproblem.{" "}
        </p>
        <p>
          {" "}
          Dynamic programming is a powerful tool for optimization because it
          allows you to consider all possible solutions to a problem, which can
          lead to more efficient solutions.
        </p>
        <div class="teclog-img">
          <img src="https://www.interviewbit.com/blog/wp-content/uploads/2022/06/What-is-Dynamic-Programming-1536x810.png" />
        </div>
        <p>
          {" "}
          Source -{" "}
          <a
            href="https://www.interviewbit.com/blog/difference-between-divide-and-conquer-and-dynamic-programming/"
            target="_blank"
            rel="noreferrer"
          >
            Dynamic Programming
          </a>{" "}
        </p>
        <h3> Solution (Dart) </h3>
        <CopyBlock
          text={`import 'dart:io'; //For user input
          import 'dart:math'; // For reducer method
          
          void main () {
            // Read number of cases from user input
            int cases = int.parse(stdin.readLineSync());
            
            for (int i = 0; i < cases; i++) {
                  print("Case #$\{i + 1}: " + chain().toString());
              }
          
          }
          
          chain () {
            int n = int.parse(stdin.readLineSync()); // Number of nodes
            List<int> funN = [0];
            funN.addAll(stdin.readLineSync().split(" ").map(int.parse).toList());  // Fun numbers mapped to Arr offset 1 so that pointers are correct
            List<int> ptrN = [0];
            ptrN.addAll(stdin.readLineSync().split(" ").map(int.parse).toList()); // Pointer numbers mapped to Arr offset 1 so that pointers are correct
            
            const int inf = 9007199254740991; // Infinity variable
            List<int> temp = List.filled(n + 1, inf); // Temporal array used to modify data
            
            int total = funN.fold(0, (previous, current) => previous + current); // Total sum of Array
          
            for (int i = n; i > 0; i--){
              if (temp[i] == inf) { 
                temp[i] = 0; // We convert the unknown number to 0 for us to work with it
              }
              
              total -= min(funN[i], temp[i]); // on our first run we are not going to subtract anything since temp[i] = 0
              int funM = max(funN[i], temp[i]); // then we change our temp value
              
              temp[ptrN[i]] = min(temp[ptrN[i]], funM);
              
            }
            return total;
          }
    `}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution</h3>
        <p>
          For this challenge, I was in charge of translating the solution to
          Dart programming language. There were two solutions for this problem,
          one on dynamic programming (Kotlin) and one with trees (Python). I
          decided to translate the problem from Kotlin, as it was cleaner to
          understand. In line commentary is provided for better understanding.
        </p>
        <h3>Conclusion</h3>
        <p>
          This problem was discussed in group several times, and it needed to be
          reviewed by everyone before actually fully understand it. The two
          solutions that were achieved were both complicated, but not impossible
          to understand, although the python solution that was achieved, was
          harder to translate since it used built in functions proper to the
          language that didn’t exist in Dart, and would result in an
          un-optimized solution.{" "}
        </p>
        <h2 id="teclog2-5">TWISTY LITTLE PASSAGES</h2>
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
        <h2 id="teclog2-6">DOUBLE OR ONE THING</h2>
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
        <h2 id="teclog2-7">EQUAL SUM</h2>
        <h3>Problem</h3>
        <p>
          {" "}
          You are given a set of distinct integers. You need to separate them
          into two non-empty subsets such that each element belongs to exactly
          one of them and the sum of all elements of each subset is the same.{" "}
        </p>
        <p>
          {" "}
          An anonymous tip told us that the problem above was unlikely to be
          solved in polynomial time (or something like that), so we decided to
          change it. Now you get to decide what half of the integers are!{" "}
        </p>
        <p>
          {" "}
          This is an interactive problem with three phases. In phase 1, you
          choose NN distinct integers. In phase 2, you are given another NN
          integers that are distinct from each other and from the ones you chose
          in phase 1. In phase 3, you have to partition those 2N2N integers into
          two subsets, both of which sum to the same amount. All 2N2N integers
          are to be between 11 and 109109, inclusive, and it is guaranteed that
          they sum up to an even number.{" "}
        </p>
        <a
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000877ba5/0000000000aa8fc1"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          In this challenge we are required to divide a set of 2N different
          numbers into 2 subsets, no matter its size, in which the sums of their
          elements have the same value, in other words, the difference of their
          sums needs to be equal to zero. This problem has 3 stages:
        </p>
        <ul>
          <li>Stage 1, the user inputs the first N different numbers. </li>
          <li>
            Stage 2, the machine provides the remaining N numbers in such a way
            that the sum of all 2N integers is even{" "}
          </li>
          <li>
            Stage 3, the user prints one of the two possible sets with equal sum
            for the given 2N numbers.{" "}
          </li>
        </ul>
        <p>
          All the numbers provided have values between 1 and 10**9 and N is
          always equal to 100 for the test cases.{" "}
        </p>
        <p>
          In order to solve this problem, the user needs to generate the first N
          numbers in such a way that these numbers can fulfill any possible
          difference. It can be said that after minimizing the difference of the
          sum of the two subsets, this difference could be, at most, of 10**9.
          Therefore, we need to provide a set of numbers that combined would
          take any value between 1 and 10**9 to satisfy this difference. Given
          that N will be bigger than 100 if we use the decimal system to
          represent every possible difference, a binary representation of
          numbers from 1 to 10**9 needs to be implemented. Indeed, this
          representation can be reached with the 30 first powers of 2, and thus
          the remaining N-30 numbers we need to provide can be whatever other
          numbers inside 1 and 10**9.{" "}
        </p>
        <h3> Solution (Dart) </h3>
        <CopyBlock
          text={`import 'dart:io';
          import 'dart:math';
          
          List<num> powersOftwo(N) {
            List<num> A = [];
          
            for (int i = 0; i < 30; i++) {
              A.add(pow(2, i));
            }
          
            if (N <= 30) {
              return A;
            } else {
              for (int i = 0; i < N - 30; i++) {
                A.add(pow(10, 9) - i);
              }
              return A;
            }
          }
          
          solveSum(A, B, N) {
            List<int> equalSum = [];
            for (int i = 0; i < B.length; i++) {
              A.add(B[i]);
            }
            A.sort();
            num aSum = 0;
            num bSum = 0;
          
            for (int i = A.length - 1; i >= 0; i--) {
              if (aSum > bSum) {
                equalSum.add(A[i]);
                bSum += A[i];
              } else {
                aSum += A[i];
              }
            }
            return equalSum;
          }
          
          void main() {
            int T = int.parse(stdin.readLineSync());
          
            for (int i = 0; i < T; i++) {
              int N = int.parse(stdin.readLineSync());
          
              List<num> A = powersOftwo(N);
          
              List<String> temporal = A.map((e) => e.toString()).toList();
              print(temporal.join(" "));
          
              List<String> bString = stdin.readLineSync()!.split(" ");
          
              List<int> B = bString.map(int.parse).toList();
          
              List<num> C = solveSum(A, B, N);
          
              List<String> listC = C.map((e) => e.toString()).toList();
              print(listC.join(" "));
            }
          }
    `}
          language={"dart"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution </h3>
        <p>
          {" "}
          I made the translation to Dart in conjunction with a teammate. Dart is
          one of the slowest programming languages in comparison to Python,
          TypeScript and Kotlin so deep optimization was needed in order for the
          program to pass speed tests.{" "}
        </p>
        <h2 id="teclog2-8">WEIGHTLIFTING</h2>
        <h3>Problem</h3>
        <p>
          You are following a prescribed training for weightlifting. The
          training consists of a series of exercises that you must do in order.
          Each exercise requires a specific set of weights to be placed on a
          machine. There are W types of different weights. For example, an
          exercise may require 3 weights of type A and 1 weight of type B, while
          the next requires 2 weights each of types A, C, and D.
        </p>
        <div class="teclog-img">
          <img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1OV3xmMuPrgn4r0DOCfPDUdJxR_YYgkRQeKr9PzVLxuaeAK7zrYDZI6f3Iqu4iiQsr1zo/weightlifting.png" />
        </div>
        <p>
          The weights are placed on the machine as a stack. Formally, with a
          single operation, you can either add a new weight of any type to the
          top of the stack, or remove the weight that is currently at the top of
          the stack.
        </p>
        <p>
          You can load the weights for each exercise onto the machine's stack in
          any order. So, if you place the weight of type B at the bottom in the
          first exercise of the example above, you will have to take all the
          weights off before putting on the weights for the second exercise. On
          the other hand, if you place the weight of type B third from the
          bottom, you can leave two of the weights of type A on the bottom of
          the stack to be part of the next exercise's set, saving you some time.
        </p>
        <p>
          Given the amount of weights of each type needed for each exercise,
          find the minimum number of operations needed to do them all. You must
          complete the exercises in the order given. The machine stack starts
          out empty, and you must leave it empty after you finish with all your
          exercises.
        </p>
        <a
          href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000877ba5/0000000000aa9280"
          target="_blank"
          rel="noreferrer"
        >
          Google Jam
        </a>
        <br />
        <br />
        <h3>Approach</h3>
        <p>
          On this problem you must count as an operation each time you wither
          put on or off weight to complete each exercise. As inputs you are
          given T number of cases on the first line, on the next line will be 2
          integers with E number of exercises and W types of weights. Then, will
          follow E numbers of lines, with each one containing the weights
          required for each exercise. At the end of each line E of exercises you
          must empty the stack of weights.{" "}
        </p>
        <p>
          For example, if you have 3 exercises (e) with 1 weight type (w), and
          each of the exercises needs 1, 2 and 1 as weights, the result will be
          4 operations.{" "}
        </p>
        <ul>
          <li> One operation to put on a 1w</li>
          <li>
            {" "}
            One operation to put another 1w to complete an exercise of 2w{" "}
          </li>
          <li> One operation to put off 1w and complete an exercise of 1w </li>
          <li>One operation to put off 1w and empty the stack </li>
        </ul>

        <p>
          The number of exercises and weights are always different, nevertheless
          in order to achieve an optimal way of loading and unloading weights
          it’s imperative to find a set of common weights that never left the
          stock. In other words that set of weights must belong the intersection
          of all the exercises requirements.{" "}
        </p>
        <p>
          Then, we should define a differential (dp) as optimal way to do the
          movements through all exercises. Keep in mind that the starting and
          finishing point must be the same; out of the common set of weights.
          The “dp” are represented by the blue arrows in the illustration above.
          Notice that they change on every interval, so they depend on the
          position.{" "}
        </p>
        <p>
          Even though the possible movements are less than before, there are
          several options, so what we should do it’s to calculate the shorter
          one.{" "}
        </p>

        <h3> Solution (Dart) </h3>
        <CopyBlock
          text={`import 'dart:io';

          dynamic solve(INF) {
            dynamic temporal = stdin.readLineSync().split(" ");
            int e = int.parse(temporal[0]);
            int w = int.parse(temporal[1]);
            List<dynamic> allExcercises = [];
            List<dynamic> dp = [];
          
            for (int i = 0; i < e; i++) {
              allExcercises.add(stdin.readLineSync().split(" ").map(int.parse).toList());
            }
          
            for (int i = 0; i < e; i++) {
              dp.add([]);
              for (int j = 0; j < e; j++) {
                dp[i].add(0);
              }
            }
          
            List<dynamic> current = [];
          
            for (int i = 0; i < e; i++) {
              current = [];
              for (int l = 0; l < w; l++) {
                current.add(INF);
              }
              for (int j = i; j < e; j++) {
                for (int k = 0; k < w; k++) {
                  if (allExcercises[j][k] < current[k]) {
                    current[k] = allExcercises[j][k];
                  }
                }
                dp[i][j] = current.reduce((value, element) => value + element);
              }
            }
            List dpDouble = [];
          
            for (int i = 0; i < e; i++) {
              dpDouble.add([]);
              for (int j = 0; j < e; j++) {
                dpDouble[i].add(INF);
              }
            }
            for (int row = 0; row < e; row++) {
              dpDouble[row][row] = 2 * dp[row][row];
          
              for (int revRow = row; revRow >= 0; revRow--) {
                for (int k = revRow; k < row; k++) {
                  int minval;
                  for (int min = revRow; min <row; min++){
                    if (min == revRow){
                      minval = dpDouble[revRow][min]+dpDouble[min+1][row]-2*dp[revRow][row];
                    } else{
                      int curr = dpDouble[revRow][min]+dpDouble[min+1][row]-2*dp[revRow][row];
                      if (curr < minval) {
                        minval = curr;
                      }
                    }          
                  }
                  dpDouble[revRow][row] = minval;
                }
              }
            }
            return dpDouble[0][e-1];
          }
          
          void main() {
            num INF = (999999999999999999);
          
            int cases = int.parse(stdin.readLineSync());
          
            List resultsArray = [];
          
            for (int i = 0; i < cases; i++) {
              resultsArray.add(solve(INF));
            }
            for (int i = 0; i < cases; i++) {
              print("Case #$\{i + 1}: $\{resultsArray[i]}");
            }
          }
    `}
          language={"dart"}
          showLineNumbers={true}
          startingLineNumber={0}
          theme={dracula}
          wrapLines
        />
        <h3>Contribution </h3>
        <p>
          {" "}
          I made the translation to Dart in conjunction with a teammate. Dart is
          one of the slowest programming languages in comparison to Python,
          TypeScript and Kotlin so deep optimization was needed in order for the
          program to pass speed tests.{" "}
        </p>
      </>
    ),
  },
];
