import java.io.*;
import java.util.*;

public class Solution {

    // Complete the twoStrings function below.
    static String twoStrings(String s1, String s2) {

        HashSet<Character> setS1 = new HashSet<Character>();
        HashSet<Character> setS2 = new HashSet<Character>();
        HashSet<Character> intersection = new HashSet<Character>();

        for (Character character : s1.toCharArray()) {
            setS1.add(character);
        }

        for (Character character : s2.toCharArray()) {
            setS2.add(character);
        }

        intersection.addAll(setS1);
        intersection.retainAll(setS2);

        return intersection.isEmpty() ? "NO" : "YES";
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {

        // BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s1 = scanner.nextLine();

            String s2 = scanner.nextLine();

            String result = twoStrings(s1, s2);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
