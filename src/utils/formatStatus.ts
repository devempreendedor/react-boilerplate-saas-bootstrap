export const formatStatus = (
  status: string
): { label: string; color: string } => {
  console.log('status', status)

  switch (status) {
    case 'open':
      return {
        label: 'Aberto',
        color: '#10b981',
      }
    case 'closed':
      return {
        label: 'Fechado',
        color: '#f43f5e',
      }
    default:
      return {
        label: 'default',
        color: '',
      }
  }
}
