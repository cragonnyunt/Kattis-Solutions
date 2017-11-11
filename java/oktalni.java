import java.util.Scanner;

public class oktalni {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String binary = scan.next();
		if (binary.length() % 3 == 2)
			binary = "0" + binary;
		else if (binary.length() % 3 == 1)
			binary = "00" + binary;
		StringBuilder sb = new StringBuilder(binary.length() / 3);
		for (int i = 0; i < binary.length(); i += 3)
			sb.append(Integer.parseInt(binary.substring(i, i + 3), 2));
		System.out.println(sb);
		scan.close();
	}
}
