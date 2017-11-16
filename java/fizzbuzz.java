import java.util.Scanner;

public class fizzbuzz {
	static int getGCD(int a, int b) {
		return b == 0 ? a : getGCD(b, a % b);
	}

	static int getLCM(int a, int b) {
		return a * b / getGCD(a, b);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int X = scan.nextInt();
		int Y = scan.nextInt();
		int N = scan.nextInt();
		for (int i = 1; i <= N; i++) {
			if (i % getLCM(X, Y) == 0)
				System.out.println("FizzBuzz");
			else if (i % X == 0)
				System.out.println("Fizz");
			else if (i % Y == 0)
				System.out.println("Buzz");
			else
				System.out.println(i);
		}
		scan.close();
	}
}
