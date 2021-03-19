import Factory from '../Factory';

describe('Factory', () => {
  describe('.create()', () => {
    it('returns create factory bot params', () => {
      const factory = Factory.create('user_profile', { first_name: 'Employee' });

      expect(factory.value).toEqual(['', 'create', 'user_profile', { first_name: 'Employee' }]);
    });
  });

  describe('.create_list()', () => {
    it('returns create_list factory bot params', () => {
      const factory = Factory.createList('user_profile', 2, { first_name: 'Employee' });
      expect(factory.value).toEqual(['', 'create_list', 'user_profile', 2, { first_name: 'Employee' }]);
    });
  });

  describe('.as()', () => {
    it('adds name to factory params', () => {
      const factory = Factory.createList('user_profile', 2).as('employee_list');

      expect(factory.value).toEqual(['employee_list', 'create_list', 'user_profile', 2]);
    });
  });
});