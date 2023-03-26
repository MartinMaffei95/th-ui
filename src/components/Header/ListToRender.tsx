//=>> MUI components
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

// =>>> Models
import { OptType } from '@/models';
import { useNavigate } from 'react-router-dom';

type ListToRender = {
  itemsToRender: OptType[];
  listLabelName: string;
};

const ListToRender = ({ itemsToRender, listLabelName }: ListToRender) => {
  const navigate = useNavigate();
  return (
    <List
      aria-labelledby="add-image"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {listLabelName}
        </ListSubheader>
      }
    >
      {itemsToRender?.map((opt) => (
        <ListItem key={opt?.id} disablePadding>
          <ListItemButton
            disabled={opt?.disabled}
            onClick={() => {
              opt?.action();
              {
                opt?.redirect ? navigate(opt?.redirect) : null;
              }
            }}
          >
            <ListItemIcon>{opt?.icon}</ListItemIcon>
            <ListItemText primary={opt?.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListToRender;
