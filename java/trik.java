import java.util.Scanner;

public class trik {
	static int index = 1;

	static void swap(int a, int b) {
		if (index == a)
			index = b;
		else if (index == b)
			index = a;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String moves = scan.next();
		for (char c : moves.toCharArray())
			switch (c) {
			case 'A':
				swap(1, 2);
				break;
			case 'B':
				swap(2, 3);
				break;
			default:
				swap(3, 1);
				break;
			}
		System.out.println(index);
		scan.close();
	}
}
