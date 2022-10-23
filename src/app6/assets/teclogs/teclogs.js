import { CopyBlock, dracula } from "react-code-blocks";

export const teclogs = [
  {
    link: "/TecLog-1",
    title: "APPRENTICE INDIVIDUAL TECHNICAL LOG DOC, WEEK 4",
    date: "Oct 24, 2022",
    content: (
      <>
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
        <h3>Solution</h3>
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
        would would result in a lower alphabetical order"""
        
        if letter + letter + res > letter + res: 
            res = letter + res
        else:
            res = letter + letter + res
        
    return res
 
 
if __name__ == '__main__':
    main()`}
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
          “Dictionary search”, my approach was to actually search how most
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
          in every problem.{" "}
        </p>
      </>
    ),
  },
];
