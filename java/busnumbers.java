import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class busnumbers {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int[] bus = new int[N];
		for (int i = 0; i < N; i++)
			bus[i] = scan.nextInt();
		Arrays.sort(bus);
		int i = 0;
		ArrayList<String> bus_list = new ArrayList<>();
		while (i < bus.length) {
			bus_list.add(String.valueOf(bus[i]));
			if (i < bus.length - 2 && bus[i + 2] - bus[i + 1] == bus[i + 1] - bus[i] && bus[i + 2] - bus[i + 1] == 1) {
				bus_list.add("-");
				int j = i + 1;
				while (j + 1 < bus.length)
					if (bus[j + 1] - bus[j] != 1)
						break;
					else
						j++;
				i = j;
			} else
				i++;
		}
		StringBuilder sb = new StringBuilder();
		for (i = 0; i < bus_list.size(); i++) {
			sb.append(bus_list.get(i));
			if (i != bus_list.size() - 1 && bus_list.get(i) != "-" && !bus_list.get(i + 1).equals("-"))
				sb.append(" ");
		}
		System.out.println(sb);
		scan.close();
	}
}
