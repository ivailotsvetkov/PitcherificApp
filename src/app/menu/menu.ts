import { Menu } from './menu.model';

export const verticalMenuItems = [
  new Menu(10, 'Pitch Your Ideas', '/', null, 'fa-lightbulb-o', null, true, 0, null),
  new Menu(11, 'Elevator Pitch', '/', null, 'phone', null, false, 10, 0),
  new Menu(12, 'NABC Pitch', '/', null, 'phone', null, false, 10, 1),
  new Menu(13, 'One Sentence Pitch', '/', null, 'phone', null, false, 10, 2),
  new Menu(14, 'Pecha Kucha', '/', null, 'phone', null, false, 10, 3),
  new Menu(20, 'For Startup Events', '/', null, 'fa-trophy', null, true, 0, null),
  new Menu(21, 'WeLoveStartups', '/', null, 'phone', null, false, 20, 4),
  new Menu(22, 'Startup Weekend', '/', null, 'phone', null, false, 20, 5),
  new Menu(23, 'Competition Pitch', '/', null, 'phone', null, false, 20, 5),
  new Menu(30, 'For Job Interviews', '/', null, 'fa-black-tie', null, true, 0, null),
  new Menu(31, 'Job Pitch', '/', null, 'phone', null, false, 30, 5),,
  new Menu(40, 'Investor Pitching', '/', null, 'fa-dollar', null, true, 0, null),
  new Menu(41, 'Investor Elevator', '/', null, 'phone', null, false, 40, 5),
  new Menu(42, 'Investor Meeting', '/', null, 'phone', null, false, 40, 5),
  new Menu(50, 'Explain Science', '/', null, 'fa-graduation-cap', null, true, 0, null),
  new Menu(51, 'IMRaD (Research...', '/', null, 'phone', null, false, 50, 5)
]
