import { Box } from 'components/Box/Box';

export const WellcomeMessage = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="70px"
      color="#494848"
      borderBottom="1px solid #ccc"
      padding="10px"
      bg="#f5f5f5"
    >
      Wellcome! Click by any contantact and start chating
    </Box>
  );
};
