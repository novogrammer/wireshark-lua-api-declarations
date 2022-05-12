function canCallNoError<Args extends any[], R>(this: void, f: (this: void, ...args: Args) => R, ...args: Args): boolean {
  const result = pcall(f, ...args);
  if (!result[0]) {
    result[1]
  }
  return result[0];
}


interface CalledWithError {
  isNoError: true,
  name: string,
}

interface CalledWithNoError {
  isNoError: false,
  name: string,
  errorMessage: string,
}
type CalledWithErrorOrNoError = CalledWithError | CalledWithNoError;

export default class Recorder {

  hasCalledNoErrorResultList: CalledWithErrorOrNoError[] = [];
  constructor() {
  }
  tryPcall<Args extends any[], R>(name: string, f: (this: void, ...args: Args) => R, ...args: Args): void {
    const result = pcall(f, ...args);
    if (result[0]) {
      this.hasCalledNoErrorResultList.push({
        isNoError: true,
        name,
      });
    } else {
      this.hasCalledNoErrorResultList.push({
        isNoError: false,
        name,
        errorMessage: result[1],
      });
    }
  }
  printResult() {

    const calledWithErrorList = this.hasCalledNoErrorResultList.filter(({ isNoError }) => !isNoError);
    for (let calledWithErrorOrNoError of this.hasCalledNoErrorResultList) {
      if (!calledWithErrorOrNoError.isNoError) {
        console.log("error detail");
        console.log(`name: "${calledWithErrorOrNoError.name}"`);
        console.log(`errorMessage: "${calledWithErrorOrNoError.errorMessage}"`);
        console.log("test failed.");
      }

    }

    const totalCount = this.hasCalledNoErrorResultList.length;
    const isNoErrorCount = this.hasCalledNoErrorResultList.filter(({ isNoError }) => isNoError).length;
    console.log(`result ${isNoErrorCount}/${totalCount}`);
  }
}