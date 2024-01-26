export class Ferment {
  constructor(
    id: number,
    name: string,
    type: string,
    status: string,
    startDate: Date,
    fermentationDuration: number
  ) {
    this.id = id
    this.name = name
    this.type = type
    this.status = status
    this.startDate = startDate
    this.fermentationDuration = fermentationDuration
  }

  id: number
  name: string
  type: string
  status: string
  startDate: Date
  fermentationDuration: number
}

export class PartialFerment {
  constructor() {
    this.name = ''
    this.type = ''
    this.startDate = new Date()
    this.fermentationDuration = 0
  }

  name: string
  type: string
  startDate: Date
  fermentationDuration: number
}
