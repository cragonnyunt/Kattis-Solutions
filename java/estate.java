import java.util.Scanner;

public class estate {
	static final int[] options = new int[1000000];

	static {
		int count = 1;
		for (int i = 2; i < options.length; i += count + 1) {
			for (int j = i; j < options.length; j += count)
				options[j - 1]++;
			count++;
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int input;
		while ((input = scan.nextInt()) != 0)
			System.out.println(options[input - 1]);
		scan.close();
	}
}
