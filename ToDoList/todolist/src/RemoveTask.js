import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function RemoveTask(props)

{
return (
		<Button variant="contained" startIcon=<DeleteIcon /> onClick={function(event){


		props.removeTask(props.task_id);

		}


		}>BORRAR</Button>
);

}

export default RemoveTask;
