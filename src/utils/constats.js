import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import {colors} from '../theme/colors';

export const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLETED: 3,
  CANCEL: 4,
};

export const taskValues = [
  {
    status: 1,
    title: 'Ongoing',
    color: colors.ONGOING,
    icon: <ChartCircle size="40" color={colors.WHITE} />,
  },
  {
    status: 2,
    title: 'Pending',
    color: colors.PENDING,
    icon: <Clock size="40" color={colors.WHITE} />,
  },
  {
    status: 3,
    title: 'Completed',
    color: colors.COMPLETED,
    icon: <TickCircle size="40" color={colors.WHITE} />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: colors.CANCEL,
    icon: <CloseCircle size="40" color={colors.WHITE} />,
  },
];
