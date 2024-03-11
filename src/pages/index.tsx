import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Index() {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    // Générer une liste aléatoire de nombres entiers
    const randomNumbers: number[] = [];
    for (let i = 0; i < 10; i++) {
      // On ajoute des nouvelles valeurs permettent de générer des nombres entre -1000 et 1000.
      randomNumbers.push(Math.floor(Math.random() * 2001) - 1000);
    }
    // On met à jour le useState
    setNumbers(randomNumbers);
  }, []);

  function getTestResult(number: number) {
    if (number % 3 === 0 && number % 5 === 0) {
      // Si number est divisible par à la fois 3 et 5, retourne "Gestform"
      return "Gestform";
    } else if (number % 3 === 0) {
      // Si number est divisible par 3 uniquement, retourne "Gest"
      return "Gest";
    } else if (number % 5 === 0) {
      // Si number est divisible par 5 uniquement, retourne "Form"
      return "Form";
    } else {
      // Si aucune des conditions précédentes n'est satisfaite, retourne number converti en chaîne de caractères
      return number.toString();
    }
  }

  return (
    <>
      <div className="container mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nombres</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {numbers.map((number, index) => (
                <TableCell key={index}>{getTestResult(number)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
