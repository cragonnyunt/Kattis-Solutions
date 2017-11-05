import java.util.Scanner;

public class bits {
	static int[] bits = new int[250001];
	static {
		int length = 1;
		for (int i = 0; i < 16; i++) {
			int add = (int) Math.pow(2, i + 1);
			for (int j = length; j < bits.length; j += add) {
				int count = 0;
				int index = j;
				while (count < length && index < bits.length) {
					bits[index++]++;
					count++;
				}
			}
			length *= 2;
		}
		for (int i = 10; i < bits.length; i++)
			bits[i] = Math.max(bits[i], bits[i / 10]);
	}

	static int getBit(int X) {
		if (X < bits.length)
			return bits[X];
		else {
			int count_1s = 0;
			for (char c : Integer.toBinaryString(X).toCharArray())
				if (c == '1')
					count_1s++;
			return Math.max(count_1s, getBit(X / 10));
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int X = scan.nextInt();
			System.out.println(getBit(X));
		}
		scan.close();
	}
}
