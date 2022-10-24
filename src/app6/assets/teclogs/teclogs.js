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
      </>
    ),
  },
];
