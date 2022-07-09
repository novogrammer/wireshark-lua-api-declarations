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

const style=(...styles:Array<string>)=>`\x1B[${styles.join(";")}m`;
const STYLE_RESET="0";
const STYLE_RED="31";
const STYLE_GREEN="32";
const STYLE_BOLD="1";

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
  printWithErrorStyle(text:string){
    console.log(`${style(STYLE_RED,STYLE_BOLD)}${text}${style(STYLE_RESET)}`);

  }
  // expect detect `test failed.` to change exit code.
  printFailed() {
    this.printWithErrorStyle("*** test failed. ***");
  }
  printResult() {

    for (let calledWithErrorOrNoError of this.hasCalledNoErrorResultList) {
      if (!calledWithErrorOrNoError.isNoError) {
        this.printWithErrorStyle("error detail");
        this.printWithErrorStyle(`name: "${calledWithErrorOrNoError.name}"`);
        this.printWithErrorStyle(`errorMessage: "${calledWithErrorOrNoError.errorMessage}"`);
        this.printWithErrorStyle("error detail");
        this.printFailed();
      }
    }

    const totalCount = this.hasCalledNoErrorResultList.length;
    const isNoErrorCount = this.hasCalledNoErrorResultList.filter(({ isNoError }) => isNoError).length;
    const color=isNoErrorCount==totalCount?STYLE_GREEN:STYLE_RED;
    this.printWithErrorStyle(`*** result ${isNoErrorCount}/${totalCount} ***`);
  }
}