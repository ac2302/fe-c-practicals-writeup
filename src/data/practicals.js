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

	// practical 10
	{
		number: 10,
		aim: "Write a C program for binary search and to find out the position of the number.",
		theory:
			"Binary search is a searching algorithm to search for an element in a sorted list. It has log n time complexity where n is the number of elenents in the list.",
		code: `#include <stdio.h>

int bins(int *arr, int search, int start, int end)
{
	int index;
	int mid = (start + end) / 2;
	
	if (arr[mid] == search)
		return mid;

	if (arr[mid] > search)
	{
		index = bins(arr, search, start, mid);
		if (index != -1)
			return index;
	}

	if (arr[mid] < search)
	{
		index = bins(arr, search, mid, end);
		if (index != -1)
			return index;
	}
		

	return -1;
}

int main()
{
	int len;
	printf("enter number of elements: ");
	scanf("%d", &len);

	int arr[len], search, index;
	
	printf("enter %d numbers:\\n", len);
	for (int i = 0; i < len; i++)
		scanf("%d", arr+i);

	printf("enter number to search for: ");
	scanf("%d", &search);

	index = bins(arr, search, 0, len);

	if (index != -1)
		printf("%d found at index %d\\n", search, index);
	else
		printf("%d not found\\n", search);

	return 0;
}

`,
		images: [
			{ uri: "/img/p10/code.png", caption: "screenshot of code" },
			{ uri: "/img/p10/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned to recurcively implement binary search in C",
	},

	// practical 11
	{
		number: 11,
		aim: "Write a C program to addition 3*3 matrix and find the transpose of it.",
		theory:
			"Matrices in C can easily be represented with 2d arrays in C. This allows us to perform operations on them.",
		code: `#include <stdio.h>

int main()
{
	int m1[3][3], m2[3][3], sum[3][3], trans[3][3];

	// input matrix 1
	printf("enter the elements of the first matrix\\n");
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			scanf("%d", &m1[i][j]);
	
	//input matrix 2
	printf("enter the elements of the second matrix\\n");
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			scanf("%d", &m2[i][j]);

	//calculating sum
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			sum[i][j] = m1[i][j] + m2[i][j];
	
	//calculating transpose of sum
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			trans[i][j] = sum[j][i];

	// display sum
	printf("the sum of the matrices is\\n");
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
			printf("%8d", sum[i][j]);
		printf("\\n");
	}

	// display transpose of sum
	printf("the transpose of sum of the matrices is\\n");
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
			printf("%8d", trans[i][j]);
		printf("\\n");
	}
	

	return 0;
}
`,
		images: [
			{ uri: "/img/p11/code.png", caption: "screenshot of code" },
			{ uri: "/img/p11/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to work with 2d arrays in C",
	},

	// practical 12
	{
		number: 12,
		aim: "Write a program to check whether entered string is a palindrome or not.(Without Built-in Functions)",
		theory:
			"A palindrome is a word that is the same forwards and backwards. Examples of palindromes include mom and madam",
		code: `#include <stdio.h>
#include <stdbool.h>

#define LEN 512

int mystrlen(char *str) {
    int len = 0;

    for (int i = 0; str[i] != '\\0'; i++)
        len++;

    return len;
}

bool isPan(char *str) {
    int len = mystrlen(str);

    for (int i = 0; i < len; i++)
        if (str[i] != str[len - 1 - i])
            return false;

    return true;
}

int main()
{
    char str[LEN];
    printf("enter a string\\n");
    scanf("%s", str);

    if (isPan(str))
        printf("the string is a panindrome\\n");
    else
        printf("the string is not a panindrome\\n");

    return 0;
}`,
		images: [
			{ uri: "/img/p12/code.png", caption: "screenshot of code" },
			{ uri: "/img/p12/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use strings in C",
	},

	// practical 13
	{
		number: 13,
		aim: "Write a C program for inbuilt string functions [strlen(),strcat(),strcpy(),strcmp()]",
		theory:
			"strlen() is used to find length of string. strcat() is used to concatenate 2 strings. strcpy() copies one string into another, strcmp() lexiographically compares two strings",
		code: `#include <stdio.h>
#include <string.h>

#define LEN 1024

int main()
{
    char s1[LEN], s2[LEN];

    printf("enter a string:\\n");
    scanf("%s", s1);

    // strlen
    printf("the entered string is %d characters long\\n", strlen(s1));

    // strcpy
    strcpy(s2, s1);
    printf("the string was copied. the copy is\\n%s\\n", s2);

    //strcat
    printf("the concatination of string and it's copy is\\n%s\\n", strcat(s2, s1));

    // strcmp
    if (strcmp(s1, "hello") == 0)
        printf("the string is hello\\n");
    else
        printf("the string is not hello\\n");
    
    return 0;
}`,
		images: [
			{ uri: "/img/p13/code.png", caption: "screenshot of code" },
			{ uri: "/img/p13/output.png", caption: "screenshot of output" },
		],

		conclusion:
			"I learned how to use library functions in order to deal with strings in C.",
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
	// practical 15
	{
		number: 15,
		aim: "Write a C program to implement bubble sort(Using Function-By passing Parameters)",
		theory:
			"Bubble Sort is a sorting algorithm sed to sort a list in ascending or descending order. It is one of the simplest sorting algorithms. It is implemented by swapping two consecutive items if they are not in order for every two consecutive items. This is done multiple times until the entire list is sorted",
		code: `#include <stdio.h>

void bubblesort(int arr[], int len)
{
	int temp;
	int swaps = 1; // any non-zero value will do
	/*
	 * the swaps variable will keep track of number of
	 * times, elements were swapped in a rin-through
	 * if none of the variables are swapped, we can exit early.
	 * this will allow the program to finish earlier
	 * it will optimise the sorting of almost sorted arrays
	 * */
	for (int i = len - 1; (i > 0) && (swaps != 0); i--)
	{
		swaps = 0;
		for (int j = 0; j < i; j++)
			if (arr[j] > arr[j + 1])
			{
				swaps++;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
	}
}

int main()
{
	int n;
	printf("enter the number of elements: ");
	scanf("%d", &n);

	int arr[n];

	// input array
	printf("enter the elements of the array:\\n");
	for (int i = 0; i < n; i++)
		scanf("%d", &arr[i]);

	// sort it
	bubblesort(arr, n);

	// display sorted
	printf("the sorted array is:\\n");
	for (int i = 0; i < n; i++)
		printf("%d\\n", arr[i]);

	return 0;
}
`,
		images: [
			{ uri: "/img/p15/code.png", caption: "screenshot of code" },
			{ uri: "/img/p15/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to implement bubble-sort in C",
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
    printf("enter 2 numbers\\n");
    scanf("%d %d", &x, &y);

    printf("%d ^ %d = %d\\n", x, y, myPow(x, y));

    return 0;
}`,
		images: [
			{ uri: "/img/p16/code.png", caption: "screenshot of code" },
			{ uri: "/img/p16/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned about recursion in C",
	},
	// practical 17
	{
		number: 17,
		aim: "Write a program to define structured called Student with following members a)Name b)Roll_No c)DOB(date of birth) Write a program to read and display information of n students",
		theory:
			"A structure is a user-defined datatype in C. It can contain various variables of different datatypes. The size of the stricture is equal to the sum of sizes of it's elements.",
		code: `#include <stdio.h>
#include <stdlib.h>

struct Date
{
	int day;
	int month;
	int year;
};

struct Student
{
	char name[50];
	int rollNo;
	struct Date dob;
};

int main()
{
	int n;
	printf("enter the number of students: ");
	scanf("%d", &n);

	struct Student students[n];

	// taking input
	for (int i = 0; i < n; i++)
	{
		printf("enter details for student %d\\n", i + 1);
		printf("enter the student's name: ");
		scanf("%s", students[i].name);
		printf("ente the student's roll no.: ");
		scanf("%d", &students[i].rollNo);
		printf("ente the student's dob in dd mm yy format: ");
		scanf("%d %d %d", &students[i].dob.day, &students[i].dob.month, &students[i].dob.year);
	}

	printf("displaying info\\n");
	for (int i = 0; i < n; i++)
	{
		printf("student %d:\\n", i + 1);
		printf("name: %s\\n", students[i].name);
		printf("roll no.: %d\\n", students[i].rollNo);
		printf("dob: %d/%d/%d\\n", students[i].dob.day, students[i].dob.month, students[i].dob.year);
	}

	return 0;
}
`,
		images: [
			{ uri: "/img/p17/code.png", caption: "screenshot of code" },
			{ uri: "/img/p17/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use structures in C",
	},
	// practical 18
	{
		number: 18,
		aim: "Write a C program to display information of n employees using Union.",
		theory:
			"A union is a user-defined datatype in C. It can contain various variables of different datatypes. The size of the union is equal to size of it's largest element.",
		code: `#include <stdio.h>
#include <string.h>

union employeeU
{
	char name[32];
	int id;
	/*
	 * salary is stored in int as paise not rupees
	 * storing salary in floar or double my cause rounding errors.
	 * */
	int salary;
};

struct employeeS
{
	char name[32];
	int id;
	/*
	 * salary is stored in int as paise not rupees
	 * storing salary in floar or double my cause rounding errors.
	 * */
	int salary;
};

int main()
{
	int n;
	printf("enter the number of employees: ");
	scanf("%d", &n);

	union employeeU empUnion[n];
	struct employeeS empStruct[n];

	// taking input
	for (int i = 0; i < n; i++)
	{
		printf("\\nenter details for employee %d:-\\n", i + 1);
		printf("enter the name: ");
		scanf("%s", empUnion[i].name);
		strcpy(empStruct[i].name, empUnion[i].name);
		printf("enter the employee id: ");
		scanf("%d", &empUnion[i].id);
		empStruct[i].id = empUnion[i].id;
		printf("enter the employee salary in paise: ");
		scanf("%d", &empUnion[i].salary);
		empStruct[i].salary = empUnion[i].salary;
	}

	// output employee info
	printf("\\ndisplaying info\\n");
	for (int i = 0; i < n; i++)
	{
		printf("\\ndetails for employee %d:-\\n", i + 1);
		printf("name: %s\\n", empStruct[i].name);
		printf("id: %d\\n", empStruct[i].id);
		printf("salary in paise: %d\\n", empStruct[i].salary);
	}

	return 0;
}
`,
		images: [
			{ uri: "/img/p18/code.png", caption: "screenshot of code" },
			{ uri: "/img/p18/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use unions in C",
	},
	// practical 19
	{
		number: 19,
		aim: "Write a C program to swap the elements using Pointer.",
		theory:
			"pointers are special variables that contain the address of variables. Instead of swapping the values of variables directly, we can use pointers to do it",
		code: `#include <stdio.h>

void swap(int* x, int* y)
{
	int t = *x;
	*x = *y;
	*y = t;
}

int main()
{
	int a, b;

	printf("enter value of a: ");
	scanf("%d", &a);

	printf("enter value of b: ");
	scanf("%d", &b);

	printf("a = %d and b = %d\\n", a, b);

	// swap
	swap(&a, &b);

	printf("a = %d and b = %d\\n", a, b);

	return 0;
}
`,
		images: [
			{ uri: "/img/p19/code.png", caption: "screenshot of code" },
			{ uri: "/img/p19/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to swap variables using pointers",
	},
	// practical 19
	{
		number: 20,
		aim: "Write a program in C to find the largest element using Dynamic Memory Allocation",
		theory:
			"normally, when you declare a variable in C, it is allocated in the stack. To prevent large stack frames that reduce the maximum recursion depth, we use dynamic memory allocation to ask the operating system to allocate heap memory for the program. the header file that contains the functions used is stdlib.h",
		code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
	int n, largest;
	printf("enter the number of elements: ");
	scanf("%d", &n);

	// allocating memory
	int *a = (int *) malloc(n * sizeof(int));

	// checking if mwmory was allocated
	if (a == NULL)
	{
		fprintf(stderr, "haha null ptr go brr...\\n");
		return 1;
	}

	// taking input from user
	printf("enter %d numbers:\\n", n);
	for (int i = 0; i < n; i++)
		scanf("%d", a + i);

	// finding the largest
	largest = a[0];
	for (int i = 0; i < n; i++)
		if (a[i] > largest)
			largest = a[i];

	// freeing the memory
	free(a);

	printf("the largest element is %d\\n", largest);

	return 0;
}
`,
		images: [
			{ uri: "/img/p20/code.png", caption: "screenshot of code" },
			{ uri: "/img/p20/output.png", caption: "screenshot of output" },
		],

		conclusion: "I learned how to use dynamic memory allocation in C",
	},
];

export default practicals;
