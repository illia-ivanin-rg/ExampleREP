import { build, fake } from 'test-data-bot';
import { getRandomItem, getRandomNumber } from './helpers';

export const employeeDataBuilder = build('User').fields({
  employeeFirstName: fake(f => f.name.firstName()),
  employeeLastName: fake(f => f.name.lastName()),
  employeeEmail: fake(f => f.internet.email()),
  employeePassword: fake(f => f.internet.password()),
  employeeCountry: fake(f => f.address.country()),
  employeeCity: fake(f => f.address.city()),
  employeeAddress: fake(f => f.address.streetAddress()),
  employeeZipCode: fake(f => f.address.zipCode()),
  employeeState: fake(f => f.address.state()),
  employeePosition: fake(f => f.name.jobTitle()),
  employeeAbout: fake(f => f.lorem.sentence()),
  employeeMessage: fake(f => f.lorem.sentence()),
  employeeMessageShort: fake(f => f.lorem.words()),
});

export const clientDataBuilder = build('Client').fields({
  clientFirstName: fake(f => f.name.firstName()),
  clientLastName: fake(f => f.name.lastName()),
  clientEmail: fake(f => f.internet.email()),
  clientMessage: fake(f => f.lorem.sentence()),
  clientMessageShort: fake(f => f.lorem.words()),
  clientPassword: fake(f => f.internet.password()),
});

export const workspaceBuilder = build('Workspace').fields({
  workspaceName: fake(f => f.company.companyName()),
  workspaceEmail: fake(f => f.internet.email()),
  workspaceCountry: fake(f => f.address.country()),
  workspaceCity: fake(f => f.address.city()),
  workspaceZipCode: fake(f => f.address.zipCode()),
  workspaceAddress: fake(f => f.address.streetAddress()),
  workspacePhone: fake(f => f.phone.phoneNumberFormat()),
  workspaceUrl: fake(f => f.lorem.slug()),
  workspaceUniqCode: fake(f => f.lorem.word().toLowerCase()),
});

export const messageBuilder = build('Message').fields({
  messageText: fake(f => f.lorem.sentence()),
});

export const serviceCategoryBuilder = build('ServiceCategory').fields({
  serviceCategoryName: fake(f => f.lorem.words()),
});

export const serviceBuilder = build('Service').fields({
  serviceName: fake(f => f.lorem.sentence()),
  serviceDescription: fake(f => f.lorem.sentence()),
});

export const bookingBuilder = build('Booking').fields({
  bookingPrice: fake(f => f.finance.amount()),
  bookingUniqCode: Math.random().toString(36).substr(2, 5),
});

export const subscriptionPlanBuilder = build('SubscriptionPlan').fields({
  subscriptionPlanName: fake(f => f.company.companyName()),
  subscriptionPlanDescription: fake(f => f.lorem.sentence()),
});

export const billingAccountBuilder = build('BillingAccountBuilder').fields({
  vatGstId: fake(f => f.random.number().toString()),
  extraInformation: fake(f => f.lorem.words()),
});

export const paymentMethodBuilder = build('PaymentMethodBuilder').fields({
  cardBrand: getRandomItem(['Maestro', 'Switch', 'Dankort', 'American Express', 'JCB', 'Visa', 'MasterCard']),
  cardLastDigits: getRandomNumber(),
});