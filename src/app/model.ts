export class User {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  nuid: string;
  role: string;
  appeals_client: Appeal[];
  appeals_moderator: Appeal[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;

  constructor(item?: any) {
    if (item) {
      this.firstname = item.firstname;
      this.lastname = item.lastname;
      this.email = item.email;
      this.password = item.password;
      this.phone = item.phone;
      this.nuid = item.nuid;
      this.role = item.role;
      this.appeals_client = item.appeals_client;
      if (item.appeals_client) {
        this.appeals_client = [];
        for (let i of item.appeals_client) this.appeals_client.push(new Appeal(i));
      }
      this.appeals_moderator = item.appeals_moderator;
      if (item.appeals_moderator) {
        this.appeals_moderator = [];
        for (let i of item.appeals_moderator) this.appeals_moderator.push(new Appeal(i));
      }
      this.active = item.active;
      this.createdAt = item.createdAt;
      if (item.createdAt) this.createdAt = new Date(item.createdAt);
      this.updatedAt = item.updatedAt;
      if (item.updatedAt) this.updatedAt = new Date(item.updatedAt);
      this.id = item.id;
    }
  }
}

export class Appeal {

  client: User;
  car: Car;
  car_number: string;
  moderator: User;
  status: string;
  car_phone_number: string;
  reject_reason: string;
  note: string;
  arrival_time: Date;
  close_time: Date;
  createdAt: Date;
  updatedAt: Date;
  id: string;

  constructor(item?: any) {
    if (item) {
      this.client = item.client;
      if (item.client) this.client = new User(item.client);
      this.car = item.car;
      if (item.car) this.car = new Car(item.car);
      this.moderator = item.moderator;
      if (item.moderator) this.moderator = new User(item.moderator);
      this.status = item.status;
      this.car_phone_number = item.car_phone_number;
      this.reject_reason = item.reject_reason;
      this.arrival_time = item.arrival_time;
      if (item.arrival_time) this.arrival_time = new Date(item.arrival_time);
      this.close_time = item.close_time;
      if (item.close_time) this.close_time = new Date(item.close_time);
      this.createdAt = item.createdAt;
      if (item.createdAt) this.createdAt = new Date(item.createdAt);
      this.updatedAt = item.updatedAt;
      if (item.updatedAt) this.updatedAt = new Date(item.updatedAt);
      this.id = item.id;
      this.car_number = item.car_number;
    }
  }
}

export class Car {

  number: string;
  status: string;
  phone: string;
  appeals: Appeal[];
  createdAt: Date;
  updatedAt: Date;
  id: string;

  constructor(item?: any) {
    if (item) {
      this.number = item.number;
      this.status = item.status;
      this.phone = item.phone;
      this.appeals = item.appeals;
      if (item.appeals) {
        this.appeals = [];
        for (let i of item.appeals) this.appeals.push(new Appeal(i));
      }
      this.createdAt = item.createdAt;
      if (item.createdAt) this.createdAt = new Date(item.createdAt);
      this.updatedAt = item.updatedAt;
      if (item.updatedAt) this.updatedAt = new Date(item.updatedAt);
      this.id = item.id;
    }
  }
}

