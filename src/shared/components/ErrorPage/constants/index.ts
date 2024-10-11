import Error404Img from '../assets/icons/403.svg'
import Error500Img from '../assets/icons/404.svg'
import Error503Img from '../assets/icons/500.svg'
import Error403Img from '../assets/icons/503.svg'

export const SERVER_ERROR_IMAGES = {
  404: Error404Img,
  500: Error500Img,
  503: Error503Img,
  403: Error403Img,
}

export const SERVER_ERROR_TITLE = {
  404: 'Упс… Вы только что нашли страницу с ошибкой',
  500: 'Упс… Вы только что нашли страницу с ошибкой',
  503: 'Упс… Вы только что нашли страницу с ошибкой',
  403: 'Упс… Вы только что нашли страницу с ошибкой',
}

export const SERVER_ERROR_SUB_TITLE = {
  404: 'Извините, но страница, которую вы ищете, не найдена.',
  500: 'К сожалению, на нашем сервере произошла внутренняя ошибка.',
  503: 'В сервисе проходит обновление.',
  403: 'Текущая страница недоступна или у вас нет доступ к ней.',
}
