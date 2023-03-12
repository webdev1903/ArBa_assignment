import { useEffect, useState } from "react";
import "./pages.modules.css";

export default function CodeChallenge() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState<number | null>(null);
  const findSmallestMissingPositiveInteger = (): void => {
    let arr = input.trim().split(",").map(Number);
    const n = arr.length;
    const bucket = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
      if (arr[i] > 0 && arr[i] <= n) {
        bucket[arr[i]] = 1;
      }
    }

    for (let i = 1; i <= n; i++) {
      if (bucket[i] === 0) {
        setRes(i);
        return;
      }
    }

    setRes(n + 1);
  };

  return (
    <div className="ChallengeContainer">
      <p className="SameStyle">Code Challenge</p>
      <div className="ChallengeQuestion">
        <p>
          Write a function:
          <br />
          function solution(A);
          <br /> that, given an array A of N integers, returns the smallest
          positive integer (greater than 0)
          <br />
          that does not occur in A.
          <br /> For example, given A= [1, 3, 6, 4, 1, 23,] the function should
          return 5.
          <br />
          Given A = [1, 2, 3], the function should return 4.
          <br /> Write an efficient algorithm for the following assumptions:
          <br />
          Given A = [-1,-3], the function should return 1.
          <br />
          N is an integer within the range [1..100,000];
          <br /> each element of array A is an integer within the range
          [-1,000,000..1,000,000].
          <br />
        </p>
      </div>
      <div className="DataCollection">
        <p className="SameStyle">Data Collection</p>
        <div>
          <input
            type="text"
            placeholder="Input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={findSmallestMissingPositiveInteger}>
            Print Result
          </button>
        </div>
        <p>Enter the values with comma(,) separator eg: 1,3,6,4,1,2</p>
      </div>
      <div className="Output">
        <p className="SameStyle">Output</p>
        <p>{res && res}</p>
      </div>
      <div className="Note">
        <p className="SameStyle">Note::</p>
        <div>
          <p>
            You need to read the data from above input and convert that values
            into ray eg: 1,3,6,4,1,2 will be [1,3,6,4,1,2].
            <br />
            <br />
            Use above converted array as a input to your solution function
            <br />
            <br />
            Display the output result in above output section once you called
            the solution function and get the result.
          </p>
        </div>
      </div>
    </div>
  );
}
