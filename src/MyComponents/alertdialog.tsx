import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface IAlertDialog {
  title: string;
  dialog: string;
  titleButtonDecline: string;
  titleButtonAccept: string;
  titleOpenAlertDialog: string;

  handleCancel?: () => void;
  handleAccept?: () => void;
}

export function MyAlertDialog({
  title,
  dialog,
  titleButtonDecline,
  titleButtonAccept,
  titleOpenAlertDialog,
  handleAccept,
  handleCancel,
}: IAlertDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"}>{titleOpenAlertDialog}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{dialog}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {titleButtonDecline}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept}>
            {titleButtonAccept}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
