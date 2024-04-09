import React from 'react';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiAlertTriangle } from 'react-icons/fi';

const TaskCard: React.FC = () => {
  
  return (
    <div className="">
      <h1 className=" m-2 font-bold text-lg">Tasks of the day</h1>
      <div className="mt-4">
        <button className="mr-2 mb-2    w-28 border rounded-full">Not Accepted</button>
        <button className="mr-2 mb-2    w-28 border rounded-full">Ongoing</button>
        <button className="mr-2 mb-2    w-28 border rounded-full">Scheduled</button>
        <button className="mr-2 mb-2    w-28 border rounded-full">Completed</button>
        <button className="mr-2 mb-2    w-28 border rounded-full">Delayed</button>
        <button className="mr-2 mb-2    w-28 border rounded-full">On time</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <Card className="bg-[#E53E3E] text-white w-96">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Not Accepted</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
              <Badge variant="secondary">20min</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#ED8936] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Ongoing</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
              <Badge variant="secondary">20min</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#48BB78] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
              <p className="text-sm mt-2">Shampoo x1</p>
              <p className="text-sm">Conditioner x2</p>
              <p className="text-sm">Towel x2</p>
              <p className="text-sm italic">Instructions: Please get conditioners.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
