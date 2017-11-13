import java.util.Arrays;
import java.util.Scanner;

public class secretmessage {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		while (N-- > 0) {
			String message = scan.next();
			int K = (int) Math.ceil(Math.sqrt(message.length()));
			char[][] map = new char[K][K];
			for (char[] c : map)
				Arrays.fill(c, '*');
			int count = 0;
			for (int i = 0; i < K; i++)
				for (int j = 0; j < K; j++)
					if (count < message.length())
						map[i][j] = message.charAt(count++);
					else
						break;
			StringBuilder sb = new StringBuilder();
			for (int j = 0; j < K; j++)
				for (int i = K - 1; i >= 0; i--)
					if (map[i][j] != '*')
						sb.append(map[i][j]);
			System.out.println(sb);
		}
		scan.close();
	}
}
