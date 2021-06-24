const practicals = [
	// practical 1
	{
		number: 1,
		aim: "Write an algorithm and draw flowchart:To add any 2 numbers",
		theory:
			"An algorithm is a way to represent the steps nessecary to solve a problem. It is not language specific. Flowcharts are a way to visualise the flow of a program",
		code: `Algorithm:
		step 1	initialize variables a b and sum
step2	input a from user
step3	input b from user
step4	sum <- a + b
step5	output sum to terminal`,
		images: [
			{ uri: "/img/p1/flow.png", caption: "flowchart to add 2 numbers" },
		],
		conclusion:
			"I learned how to write an algorithm to add 2 numbers and to draw a flowchart to represent the flow of the program",
	},
	// practical 2
	{
		number: 2,
		aim: "Write a C program to find areas of triangle(Hint : Given 3 Sides)..",
		theory:
			"s = ((a + b + c) / 2)\\narea = sqrt(s * (s - a) * (s - b) * (s - c) )",
		code: `#include <stdio.h>
#include <math.h>

int main() {
        float a, b, c, s, area;
        printf("enter 3 sides of triangle: ");
        scanf("%f %f %f", &a, &b, &c);
        
        s = ((a + b + c) / 2);         
        area = sqrt(s * (s - a) * (s - b) * (s - c) );      
        printf("the area of the triangle is %f\\n", area);
        
        return 0;
}`,
		images: [
			{ uri: "/img/p2/code.png", caption: "screenshot of code" },
			{ uri: "/img/p2/output.png", caption: "screenshot of output" },
		],
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

	printf("the distance between the 2 points is %f\\n", distance);
        
        return 0;
} `,
		images: [
			{ uri: "/img/p3/code.png", caption: "screenshot of code" },
			{ uri: "/img/p3/output.png", caption: "screenshot of output" },
		],

		conclusion:
			"I learned that gcc needs the -lm flag to complie when math.h is inluded",
	},
	// practical 4
	{
		number: 4,
		aim: "Write Program To display the result of a student",
		theory: `a) Read marks for 3 subjects(SUB1,SUB2 and SUB3)
b) Calculate percentage of marks(P) c) If percentage(P) &gt;=70 then
display DISTINCTION.d) If percentage(P) &gt;=60 and P&lt;70 then display
FIRST.e) If percentage(P) &gt;=50 and P&lt;60 then display SECOND
f) If percentage(P) &gt;=40 and P&lt;50 then display PASS.g) If
percentage(P) &lt;40 then display FAIL.`,
		code: `#include <stdio.h>
#include <math.h>

int main() {
	float sub1, sub2, sub3, percentage;
        printf("enter marks of 3 subjects: ");
        scanf("%f %f %f", &sub1, &sub2, &sub3);
        	
	percentage = (sub1 + sub2 + sub3) / 3;

	printf("the percentage is %f\\n", percentage);

	if (percentage >= 70)
		printf("DISTINCTION\\n");
	else if (percentage >= 60)
		printf("FIRST\\n");
	else if (percentage >= 50)
		printf("SECOND\\n");
	else if (percentage >= 40)
		printf("PASS\\n");
	else
		printf("FAIL\\n");

        
        return 0;
} `,
		images: [
			{ uri: "/img/p4/code.png", caption: "screenshot of code" },
			{ uri: "/img/p4/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use if else ladder",
	},
	// practical 5
	{
		number: 5,
		aim: "Write a C program for Switch statement to perform all arithmetic operations. (+,-,/,*)",
		theory:
			"A switch statement can be used to alter control flow by checking for equality of int and char types with constant ime complexity",
		code: `#include <stdio.h>

int main() {
	float o1, o2, ans;
	char op;

	printf("enter an expression to solve\\neg. 1 + 3\\n");
	scanf("%f %c %f", &o1, &op, &o2);

	switch (op) {
		case '+':
			ans = o1 + o2;
			break;
		case '-':
                        ans = o1 - o2;
                        break;
		case '*':
                        ans = o1 * o2;
                        break;
		case '/':
                        ans = o1 / o2;
                        break;
		default:
			fprintf(stderr, "invalid operation %c\\n", op);
			return 1;
	}

	printf("%f %c %f = %f\\n", o1, op, o2, ans);
	
	return 0;
}`,
		images: [
			{ uri: "/img/p5/code.png", caption: "screenshot of code" },
			{ uri: "/img/p5/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use switch case in c",
	},
	// practical 6
	{
		number: 6,
		aim: "Write a C program to find out the Fibonacci series of given number entered by user.(Use : For Loop)",
		theory:
			"Every number in the fibonnachi series is the sum of the previoous two numbers. The starting 2 numbers are usuallu 1 and 1 or 0 and 1",
		code: `#include <stdio.h>

int main() {
	long n1, n2, temp;
	int x;
	printf("enter a number: ");
	scanf("%d", &x);

	n1 = 0, n2 = 1;
	for (int i = 0; i < x; i++) {
		printf("%ld\\n", n1);
		temp = n2;
		n2 = n1 + n2;
		n1 = temp;
	}

	return 0;
}`,
		images: [
			{ uri: "/img/p6/code.png", caption: "screenshot of code" },
			{ uri: "/img/p6/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned to use for loop to print fibonnachi numbers",
	},
	// practical 7
	{
		number: 7,
		aim: "Write a C program to find the Armstrong numbers in the entered range(Use : While Loop)",
		theory:
			"A number is an armstrong number if and only if the sum of the nth power of every digit is equal to the number itself where n is the number of digits in the number",
		code: `#include <stdio.h>
#include <math.h>

static inline int getDigits(int n)
{
	int digits = 0;
	
	while (n > 0)
	{
		digits++;
		n /= 10;
	}

	return digits;	
}

static inline int isArmstrong(int n)
{	
	int originalN = n;
	int sumOfCubes = 0;
	int digit;

	int nDigits = getDigits(n);

	while (n > 0)
	{
		digit = n % 10;
		n /= 10;
		sumOfCubes += pow(digit, nDigits);
	}

	return sumOfCubes == originalN;
}

int main()
{	
	int start, end;
	printf("enter the start and the end number\\n");
	scanf("%d %d", &start, &end);

	printf("armstrong numbers in the range:\\n");

	for (int i = start; i <= end; i++)
		if (isArmstrong(i))
			printf("%d\\n", i);

	return 0;
}`,
		images: [
			{ uri: "/img/p7/code.png", caption: "screenshot of code" },
			{ uri: "/img/p7/output.png", caption: "screenshot of output" },
		],

		conclusion:
			"I learned that armstrong can have number of digits other than 3",
	},
	// practical 8
	{
		number: 8,
		aim: `Write a C program to display the following pattern up to n terms ABCD\\nABC\\nAB\\nA`,
		theory:
			"patterns like the one above can be achieved in c with the help of nested loops and character addition",
		code: `#include <stdio.h>

#define START_CHARACTER 'A'

int main()
{
	int n;
	printf("enter a number: ");
	scanf("%d", &n);

	for (int i = n; i > 0; i--)
	{
		for (int j = 0; j < i; j++)
			printf("%c", (START_CHARACTER + j));

		printf("\\n");
	}

	return 0;
}`,
		images: [
			{ uri: "/img/p8/code.png", caption: "screenshot of code" },
			{ uri: "/img/p8/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to print patterns with nested loops",
	},
	// practical 9
	{
		number: 9,
		aim: "Write a program to find GCD and LCM of any 2 numbers(Do-While)",
		theory:
			"LCM is the least common multiple of 2 numbers and GCH is the greatest common dividend of the number",
		code: `#include <stdio.h>
#include <stdlib.h>

int lcm(int a, int b)
{
	for (int i = 1; ; i++)
		if ((a * i) % b == 0)
			return (a * i);
}

int gcd(int a, int b)
{
	int gcd = abs(a * b) / lcm(a, b);
}

int main()
{
	int n1, n2;
	printf("enter 2 numbers: ");
	scanf("%d %d", &n1, &n2);

	printf("the lcm and gcd of %d and %d is %d and %d respectively
\\n", n1, n2, lcm(n1, n2), gcd(n1, n2));

	return 0;
}`,
		images: [
			{ uri: "/img/p9/code.png", caption: "screenshot of code" },
			{ uri: "/img/p9/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to calculate lcm and gcd in C",
	},

	// practical 14
	{
		number: 14,
		aim: "Write a C program to find factorial of any number using function.",
		theory: "x! = x * (x-1)! And 1! = 1",
		code: `#include <stdio.h>

int factorial(int n)
{
	if (n == 1)
		return 1;
	return n * factorial(n-1);
}

int main()
{
	int n;
	printf("please enter a number: ");
	scanf("%d", &n);

	printf("the factorial of %d is %d\\n", n, factorial(n));

	return 0;
}`,
		images: [
			{ uri: "/img/p14/code.png", caption: "screenshot of code" },
			{ uri: "/img/p14/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned recursion in C",
	},
	// practical 16
	{
		number: 16,
		aim: "Write a recursive function to find X^Y.",
		theory: "x^y = x * x^(y-1) and x^1 = x",
		code: `#include <stdio.h>

// x^4 = x * x^(4-1)

int myPow(int x, int y)
{
    if (y == 1)
        return x;
    return x * myPow(x, y - 1);
}

int main()
{
    int x, y;
    printf("enter 2 numbers\n");
    scanf("%d %d", &x, &y);

    printf("%d ^ %d = %d\n", x, y, myPow(x, y));

    return 0;
}`,
		images: [
			{ uri: "/img/p16/code.png", caption: "screenshot of code" },
			{ uri: "/img/p16/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned abut recursion in C",
	},
];

export default practicals;
