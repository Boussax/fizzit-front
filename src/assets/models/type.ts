export class Type {
  constructor(id: number, name: string, theoreticalDuration: number) {
    this.id = id
    this.name = name
    this.theoreticalDuration = theoreticalDuration
  }
  id: number
  name: string
  theoreticalDuration: number
}
