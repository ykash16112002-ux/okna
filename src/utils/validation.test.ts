import test from 'node:test';
import assert from 'node:assert/strict';
import { validateLeadForm, formatPhoneNumber, extractPhoneDigits } from './validation.ts';
import { computeQuizEstimate } from './calculator.ts';

test('extractPhoneDigits correctly extracts digits only', () => {
  assert.equal(extractPhoneDigits('+7 (4012) 37-68-68'), '74012376868');
  assert.equal(extractPhoneDigits('8-900-123-45-67'), '89001234567');
  assert.equal(extractPhoneDigits(''), '');
});

test('formatPhoneNumber formats Russian mobile & landline properly', () => {
  assert.equal(formatPhoneNumber('84012376868'), '+7 (401) 237-68-68');
  assert.equal(formatPhoneNumber('79114567890'), '+7 (911) 456-78-90');
});

test('validateLeadForm rejects empty name or phone', () => {
  const result = validateLeadForm({ name: '', phone: '', consent: false });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.consent);
});

test('validateLeadForm rejects submission without 152-FZ consent', () => {
  const result = validateLeadForm({ name: 'Иван', phone: '+7 (911) 123-45-67', consent: false });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.consent);
});

test('validateLeadForm accepts valid input with consent', () => {
  const result = validateLeadForm({ name: 'Алексей', phone: '+7 (911) 123-45-67', consent: true });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('computeQuizEstimate assigns 82mm and 7 chambers for VEKA Softline 82', () => {
  const est = computeQuizEstimate({ objectType: 'Коттедж / дача', profileType: 'VEKA Softline 82' });
  assert.equal(est.depthMm, 82);
  assert.equal(est.recommendedChambers, 7);
  assert.equal(est.categoryName, 'Коттедж / дача');
});

test('computeQuizEstimate defaults to 70mm and 5 chambers for VEKA 70', () => {
  const est = computeQuizEstimate({ objectType: 'Квартира', profileType: 'VEKA Softline 70' });
  assert.equal(est.depthMm, 70);
  assert.equal(est.recommendedChambers, 5);
});
