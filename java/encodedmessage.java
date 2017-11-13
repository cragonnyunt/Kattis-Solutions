import java.util.Scanner;

public class encodedmessage {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			String encoded = scan.next();
			int length = (int) Math.sqrt(encoded.length());
			char[][] map = new char[length][length];
			int count = 0;
			for (int i = 0; i < length; i++)
				for (int j = 0; j < length; j++)
					map[i][j] = encoded.charAt(count++);
			StringBuilder sb = new StringBuilder(encoded.length());
			for (int j = length - 1; j >= 0; j--)
				for (int i = 0; i < length; i++)
					sb.append(map[i][j]);
			System.out.println(sb);
		}
		scan.close();
	}
}
