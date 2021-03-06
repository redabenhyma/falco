# Generated by Django 2.1.7 on 2019-03-08 17:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0005_projectauditparameters"),
        ("audits", "0006_auditresults_wpt_results_user_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="audit",
            name="parameters",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="audits",
                to="projects.ProjectAuditParameters",
            ),
        )
    ]
