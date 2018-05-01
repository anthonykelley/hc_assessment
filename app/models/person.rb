class Person < ApplicationRecord

  def self.age_bucket
    Person.find_by_sql("
      WITH cte AS (
        SELECT id,
          CASE
            WHEN age < 18 THEN '0-17'
            WHEN age >= 65 THEN '65+'
            WHEN age >= 18 AND age < 30 THEN '18-29'
            WHEN age >= 30 AND age < 45 THEN '30-44'
            WHEN age >= 45 AND age < 65 THEN '45-64'
            ELSE null
          END AS age_bucket
        FROM people)

        SELECT age_bucket, COUNT(DISTINCT id) AS total
        FROM cte
        GROUP BY age_bucket
      ")
  end

  def self.zip_count
    Person.find_by_sql("
      SELECT RIGHT(address, 5) AS zip, COUNT(DISTINCT id) AS total
      FROM people
      GROUP BY zip
      ORDER BY total DESC
      LIMIT 5
      ")
  end

  def self.person_count
    Person.find_by_sql("
      SELECT COUNT(DISTINCT id) AS total
      FROM people
      ")
  end
end
