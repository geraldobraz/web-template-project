class Example {

  name: string;
  description: string;

  /**
   *Creates an instance of Example.
   * @param {string} name
   * @param {string} description
   * @memberof Example
   */
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

}

export default Example;
