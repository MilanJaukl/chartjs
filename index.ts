abstract class Chart {
  public abstract getConfig(): Array<string>;
}

class ParetoChart extends Chart {
  public getConfig(): Array<string> {
    return ["1"];
  }
}
