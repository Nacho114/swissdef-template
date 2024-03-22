export class ContactInfo {
  static readonly address = `Route de l'Aiglon \n 1854 - Switzerland`;
  static readonly phoneNumber = "+41 79 441 24 06";
  static readonly email = "info@swissdefibrillator.ch";

  static getAddress(): string {
    return this.address;
  }

  static getPhoneNumber(): string {
    return this.phoneNumber;
  }

  static getEmail(): string {
    return this.email;
  }
}
