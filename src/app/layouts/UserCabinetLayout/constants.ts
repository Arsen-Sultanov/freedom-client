import HistoryIcon from '@rsuite/icons/History'
import ListIcon from '@rsuite/icons/List'
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch'

export const NAV_ITEMS = [
  {
    id: 0,
    link: '/keys',
    label: 'Ключи',
    Icon: ListIcon,
  },
  {
    id: 1,
    link: '/referrals',
    label: 'Рефералы',
    Icon: PeopleBranchIcon,
  },
  {
    id: 2,
    link: '/purchases',
    label: 'История покупок',
    Icon: HistoryIcon,
  },
]
