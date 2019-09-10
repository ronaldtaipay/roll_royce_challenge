﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WorkRequestInput;

namespace WorkRequestInput.Migrations
{
    [DbContext(typeof(WRIDbContext))]
    partial class WRIDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.Department", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("WRICardID");

                    b.Property<string>("name");

                    b.HasKey("id");

                    b.HasIndex("WRICardID");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.Project", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("name");

                    b.HasKey("id");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.TaskRequestTitle", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Title");

                    b.Property<int?>("WRICardID");

                    b.HasKey("ID");

                    b.HasIndex("WRICardID");

                    b.ToTable("TaskRequestTitles");
                });

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.WRICard", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AssignedToID");

                    b.Property<bool>("Completed");

                    b.Property<DateTime>("CreateTime");

                    b.Property<int>("Department");

                    b.Property<string>("Detail");

                    b.Property<int>("WRIID");

                    b.HasKey("ID");

                    b.ToTable("WRICards");
                });

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.Department", b =>
                {
                    b.HasOne("WorkRequestInput.Models.WorkRequestInput.WRICard")
                        .WithMany("Departments")
                        .HasForeignKey("WRICardID");
                });

            modelBuilder.Entity("WorkRequestInput.Models.WorkRequestInput.TaskRequestTitle", b =>
                {
                    b.HasOne("WorkRequestInput.Models.WorkRequestInput.WRICard")
                        .WithMany("TaskRequestTitles")
                        .HasForeignKey("WRICardID");
                });
#pragma warning restore 612, 618
        }
    }
}