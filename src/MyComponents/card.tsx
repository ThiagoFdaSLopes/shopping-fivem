import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MyAlertDialog } from "./alertdialog";

export const CardComponent: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Descrição</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Aqui vai o conteudo</p>
      </CardContent>
      <CardFooter>
        <MyAlertDialog
          titleOpenAlertDialog="Abrir"
          dialog="Olá, bem vindo"
          title="Você deseja realmentar?"
          titleButtonAccept="Aceitar"
          titleButtonDecline="Negar"
        />
      </CardFooter>
    </Card>
  );
};
