const practicals = [
    // practical 1
    {
        number: 1,
        aim: "Write an algorithm and draw flowchart:To add any 2 numbers",
        theory: "An algorithm is a way to represent the steps nessecary to solve a problem. It is not language specific. Flowcharts are a way to visualise the flow of a program",
        Conclusion:
            "I learned how to write an algorithm to add 2 numbers and to draw a flowchart to represent the flow of the program",
    },
    // practical 2
    {
        number: 2,
        aim: "Write a C program to find areas of triangle(Hint : Given 3 Sides)..",
        theory: "s = ((a + b + c) / 2)\narea = sqrt(s * (s - a) * (s - b) * (s - c) )",
        code: `#include <stdio.h>
#include <math.h>

int main() {
        float a, b, c, s, area;
        printf("enter 3 sides of triangle: ");
        scanf("%f %f %f", &a, &b, &c);
        
        s = ((a + b + c) / 2);         
        area = sqrt(s * (s - a) * (s - b) * (s - c) );      
        printf("the area of the triangle is %f\n", area);
        
        return 0;
} `,
        conclusion:
            "I learned how to fond area of triangle with 3 sides length given",
    },
    // practical 3
    {
        number: 3,
        aim: "Write a C program to find the length of a straight line formed by two endpoints, whose coordinates would be given as inputs.",
        theory: "distance = sqrt((x1 – x2)^2 + (y1 – y2)^2)",
        code: `#include <stdio.h>
#include <math.h>

int main() {
        float x1, y1, x2, y2, distance;
        printf("enter x and y co-ordinates of point 1: ");
        scanf("%f %f", &x1, &y1);
	 printf("enter x and y co-ordinates of point 2: ");
        scanf("%f %f", &x2, &y2);
        
        distance = sqrt(pow((x1 - x2), 2) + pow((y1 - y2), 2));

	printf("the distance between the 2 points is %f\n", distance);
        
        return 0;
} `,
        conclusion:
            "I learned that gcc needs the -lm flag to complie when math.h is inluded",
    },
];

export default practicals;
