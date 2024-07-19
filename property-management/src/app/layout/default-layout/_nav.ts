import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },

  {
    name: 'Enquiries',
    url: '/enquiries',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
    
  },


];
