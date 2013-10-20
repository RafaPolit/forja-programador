'use strict';

module.exports = [
  {
    input: 'Bua-Bua-Bua-Bua',
    expected_sleep_time: '4 horas',
    expected_actions: 'Alimentar - Alimentar - Alimentar - Alimentar',
    expected_lost_followers: 0
  },
  {
    input: 'Mua-Gua-Mua-Gua',
    expected_sleep_time: '6 horas 40 minutos',
    expected_actions: 'Pañal - Chupón - Pañal - Chupón',
    expected_lost_followers: 0
  },
  {
    input: 'Bua-Mua-Bua-Bua',
    expected_sleep_time: '4 horas 45 minutos',
    expected_actions: 'Alimentar - (Pañal Alimentar) - Alimentar',
    expected_lost_followers: 0
  },
  {
    input: 'Bua-Mua-Bua-Mua-Bua',
    expected_sleep_time: '4 horas 30 minutos',
    expected_actions: 'Alimentar - (Pañal Alimentar) - (Pañal Alimentar)',
    expected_lost_followers: 0
  },
  {
    input: 'Mua-Bua-Gua',
    expected_sleep_time: '6 horas 35 minutos',
    expected_actions: '(Pañal Alimentar) - Chupón',
    expected_lost_followers: 0
  },
  {
    input: 'Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua',
    expected_sleep_time: '3 horas 15 minutos',
    expected_actions: '(Pañal Alimentar) - (Alimentar Chupón) - (Pañal Alimentar) - Chupón - Alimentar',
    expected_lost_followers: 200
  },
  {
    input: 'Bua-Gua-Bua-Mua',
    expected_sleep_time: '5 horas 45 minutos',
    expected_actions: 'Alimentar - (Chupón Alimentar Pañal)',
    expected_lost_followers: 0
  },
  {
    input: 'Bua-Mua-Gua-Bua-Mua-Bua-Bua',
    expected_sleep_time: '3 horas 15 minutos',
    expected_actions: 'Alimentar - Pañal - (Chupón Alimentar Pañal) - Alimentar - Alimentar',
    expected_lost_followers: 200
  },
  {
    input: 'Bua-Mua-Gua-Bua-Mua-Bua-Bua-Mua-Gua-Bua',
    expected_sleep_time: '1 horas 35 minutos',
    expected_actions: 'Alimentar - Pañal - (Chupón Alimentar Pañal) - Alimentar - Alimentar - Pañal - Chupón - Alimentar',
    expected_lost_followers: 600
  },
  {
    input: 'Bua-Bua-Bua-Bua-Bua-Bua-Bua-Bua',
    expected_sleep_time: '0 minutos',
    expected_actions: 'Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar',
    expected_lost_followers: 1200
  }
];