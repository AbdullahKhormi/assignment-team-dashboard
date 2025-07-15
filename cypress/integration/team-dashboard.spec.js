describe('Team Dashboard Integration Test', () => {
  it('should load the dashboard page', () => {
    cy.visit('/team-dashboard'); // افتح صفحة الـ Dashboard

    cy.contains('Team dashboard deatils:-').should('be.visible'); // تحقق من وجود العنوان
    cy.get('table').should('exist'); // تأكد أن الجدول موجود
  });
});
