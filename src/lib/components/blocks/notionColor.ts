import styles from './notionColor.module.scss'

export default function NotionColor(color: string) {
  switch (color) {
    case 'default':
      return styles.default
    case 'gray':
      return styles.gray
    case 'brown':
      return styles.brown
    case 'orange':
      return styles.orange
    case 'yellow':
      return styles.yellow
    case 'green':
      return styles.green
    case 'blue':
      return styles.blue
    case 'purple':
      return styles.purple
    case 'pink':
      return styles.pink
    case 'red':
      return styles.red
    case 'gray_background':
      return styles.gray_background
    case 'brown_background':
      return styles.brown_background
    case 'orange_background':
      return styles.orange_background
    case 'yellow_background':
      return styles.yellow_background
    case 'green_background':
      return styles.green_background
    case 'blue_background':
      return styles.blue_background
    case 'purple_background':
      return styles.purple_background
    case 'pink_background':
      return styles.pink_background
    case 'red_background':
      return styles.red_background
    default:
      return styles.default
  }
}
