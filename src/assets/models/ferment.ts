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
