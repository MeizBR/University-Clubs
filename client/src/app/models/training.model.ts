export class Training {
    trainingName: string;
    trainingId: number;
    trainingImage: string;
    trainingDate: Date;
    trainingHour: string;
    trainingCapacity: number;
    trainingPlace: string;
    trainingInstructor: string;
    trainingDetails: string;

    constructor(
        trainingName: string,
        trainingId: number,
        trainingImage: string,
        trainingDate: Date,
        trainingHour: string,
        trainingCapacity: number,
        trainingPlace: string,
        trainingInstructor: string,
        trainingDetails: string,
        ) {
        this.trainingName = trainingName;
        this.trainingId = trainingId;
        this.trainingDate = trainingDate;
        this.trainingHour = trainingHour;
        this.trainingCapacity = trainingCapacity;
        this.trainingPlace = trainingPlace;
        this.trainingInstructor = trainingInstructor;
        this.trainingImage = trainingImage;
        this.trainingDetails = trainingDetails;
    }
}
  